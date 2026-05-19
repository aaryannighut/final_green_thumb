
// User management using server API
document.addEventListener('DOMContentLoaded', function() {
    
    // Toggle between login and signup forms
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    
    if (showSignupLink) {
        showSignupLink.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });
    }
    
    if (showLoginLink) {
        showLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }

    // Handle signup form submission
    const signupFormElement = document.getElementById('signup-form');
    if (signupFormElement) {
        signupFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            
            // Basic validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Send signup request to server
            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password // Note: In a real app, passwords should be hashed
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                
                // Set current user as logged in
                localStorage.setItem('currentUser', JSON.stringify({
                    username: data.user.username,
                    email: data.user.email
                }));
                
                alert('Sign up successful!');
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred during sign up');
            });
        });
    }

    // Handle login form submission
    const loginFormElement = document.getElementById('login-form');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Send login request to server
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                
                // Set current user as logged in
                localStorage.setItem('currentUser', JSON.stringify({
                    username: data.user.username,
                    email: data.user.email
                }));
                
                alert('Login successful!');
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred during login');
            });
        });
    }
});
