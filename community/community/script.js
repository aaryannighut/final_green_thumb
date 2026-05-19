document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        // If not logged in, redirect to login page
        window.location.href = 'login.html';
        return;
    }

    // User is logged in, show welcome message
    const user = JSON.parse(currentUser);
    const header = document.querySelector('header h1');
    header.textContent = `Welcome to Our Community, ${user.username}!`;

    // Add logout button
    const header_element = document.querySelector('header');
    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'Logout';
    logoutBtn.classList.add('logout-button');
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
    header_element.appendChild(logoutBtn);

    // Initialize posts in localStorage if not exists
    if (!localStorage.getItem('communityPosts')) {
        localStorage.setItem('communityPosts', JSON.stringify([]));
    }

    // Display existing posts
    displayPosts();

    // Handle new post submission
    const postForm = document.getElementById('new-post-form');
    if (postForm) {
        postForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const postContent = document.getElementById('post-content').value;
            if (!postContent.trim()) {
                alert('Post cannot be empty!');
                return;
            }

            // Get current date and time
            const now = new Date();
            const dateTimeString = now.toLocaleString();

            // Create post object
            const newPost = {
                author: user.username,
                content: postContent,
                timestamp: dateTimeString,
                time: now.getTime() // For sorting purposes
            };

            // Handle image upload if provided
            const imageInput = document.getElementById('post-image');
            if (imageInput.files.length > 0) {
                const file = imageInput.files[0];
                // Check file size (limit to 2MB to avoid database issues)
                if (file.size > 4 * 1024 * 1024) {
                    alert('Image is too large! Please select an image smaller than 2MB.');
                    return;
                }
                
                const reader = new FileReader();

                reader.onload = function(e) {
                    newPost.image = e.target.result; // This will be a data URL (base64 encoded)
                    saveAndDisplayPost(newPost);
                };

                reader.readAsDataURL(file);
            } else {
                // Save post immediately if no image
                saveAndDisplayPost(newPost);
            }

            // Clear form
            postForm.reset();
        });
    }

    // Function to save post to server and display it
    function saveAndDisplayPost(post) {
        // Add likes and comments properties for new post
        post.likes = { count: 0, users: [] };
        post.comments = [];
        
        // Send post to server
        fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Error: ' + data.error);
                return;
            }
            
            // Refresh posts to show the new one
            displayPosts();
        })
        .catch(error => {
            console.error('Error creating post:', error);
            alert('An error occurred while creating your post');
        });
    }

    // Check server status before operations
    function checkServerStatus() {
        return fetch('/api/status')
            .then(response => response.json())
            .then(data => data.status === 'ok')
            .catch(() => false);
    }
    
    // Function to display all posts from server
    function displayPosts() {
        const postContainer = document.getElementById('post-container');
        postContainer.innerHTML = '<p>Loading posts...</p>'; // Show loading message
        
        // First check if server is available
        checkServerStatus()
            .then(isOnline => {
                if (!isOnline) {
                    postContainer.innerHTML = '<p>Server is currently unavailable. Please try again later.</p>';
                    return;
                }
                
                // Fetch posts from server
                return fetch('/api/posts');
            })
            .then(response => {
                if (!response) return null;
                return response.json();
            })
            .then(posts => {
                if (!posts) return;
                
                postContainer.innerHTML = ''; // Clear container
                
                if (posts.length === 0) {
                    postContainer.innerHTML = '<p>No posts yet. Be the first to share something!</p>';
                    return;
                }

                // Display each post
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.dataset.postId = post.id;

                    // Post content with user info
                    postElement.innerHTML = `
                        <div class="post-header">
                            <div class="post-author">${post.author}</div>
                            <div class="post-time">${post.timestamp}</div>
                        </div>
                        <div class="post-content">${post.content}
                            ${post.image ? `<img src="${post.image}" class="post-image" alt="Post image">` : ''}
                        </div>
                        <div class="post-actions">
                            <button class="like-button">❤️ ${post.likes.count > 0 ? post.likes.count : ''}</button>
                            <button class="comment-button">💬 ${post.comments.length > 0 ? post.comments.length : ''}</button>
                        </div>
                        <div class="comments-section" style="display: none;">
                            <div class="comments-list">
                                ${post.comments.map(comment => `
                                    <div class="comment">
                                        <div class="comment-author">${comment.author}</div>
                                        <div class="comment-content">${comment.text}</div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="add-comment">
                                <textarea class="comment-input" placeholder="Write a comment..."></textarea>
                                <button class="submit-comment-button">Submit</button>
                            </div>
                        </div>
                    `;

                    // Add event listeners for like and comment buttons
                    const likeButton = postElement.querySelector('.like-button');
                    const commentButton = postElement.querySelector('.comment-button');
                    const commentsSection = postElement.querySelector('.comments-section');
                    const submitCommentButton = postElement.querySelector('.submit-comment-button');
                    const commentInput = postElement.querySelector('.comment-input');

                    // Like button functionality
                    likeButton.addEventListener('click', function() {
                        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                        const username = currentUser.username;
                        const postId = postElement.dataset.postId;
                        
                        // Check if user already liked this post and toggle active class
                        if (post.likes.users.includes(username)) {
                            likeButton.classList.add('active');
                        }

                        // Send like/unlike request to server
                        fetch(`/api/posts/${postId}/like`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ username })
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.error) {
                                alert('Error: ' + data.error);
                                return;
                            }

                            // Refresh the posts to show updated likes
                            displayPosts();
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert('An error occurred while processing your like');
                        });
                    });

                    // Comment button functionality
                    commentButton.addEventListener('click', function() {
                        // Toggle comments section
                        if (commentsSection.style.display === 'none') {
                            commentsSection.style.display = 'block';
                        } else {
                            commentsSection.style.display = 'none';
                        }
                    });

                    // Submit comment functionality
                    submitCommentButton.addEventListener('click', function() {
                        const commentText = commentInput.value.trim();
                        if (commentText) {
                            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                            const username = currentUser.username;
                            const postId = postElement.dataset.postId;

                            // Send comment to server
                            fetch(`/api/posts/${postId}/comment`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    author: username,
                                    text: commentText
                                })
                            })
                            .then(response => response.json())
                            .then(data => {
                                if (data.error) {
                                    alert('Error: ' + data.error);
                                    return;
                                }

                                // Update UI with the new comment
                                const commentsList = postElement.querySelector('.comments-list');
                                const newComment = document.createElement('div');
                                newComment.classList.add('comment');
                                newComment.innerHTML = `
                                    <div class="comment-author">${username}</div>
                                    <div class="comment-content">${commentText}</div>
                                `;
                                commentsList.appendChild(newComment);

                                // Clear input
                                commentInput.value = '';
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                alert('An error occurred while adding your comment');
                            });
                        }
                    });

                    // Add to post container
                    postContainer.appendChild(postElement);
                });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                postContainer.innerHTML = '<p>Error loading posts. Please try again later.</p>';
            });
    }
});