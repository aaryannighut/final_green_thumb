
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// Initialize database
const db = new sqlite3.Database('./community.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the community database.');
});

// Create tables
db.serialize(() => {
  // Users table
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`);
  
  // Posts table
  db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT NOT NULL,
    content TEXT NOT NULL,
    timestamp TEXT NOT NULL,
    image TEXT,
    time INTEGER
  )`);
  
  // Likes table
  db.run(`CREATE TABLE IF NOT EXISTS likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER NOT NULL,
    username TEXT NOT NULL,
    UNIQUE(post_id, username),
    FOREIGN KEY(post_id) REFERENCES posts(id)
  )`);
  
  // Comments table
  db.run(`CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER NOT NULL,
    author TEXT NOT NULL,
    text TEXT NOT NULL,
    time INTEGER,
    FOREIGN KEY(post_id) REFERENCES posts(id)
  )`);
});

// API routes for users
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;
  
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (row) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    
    const stmt = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    stmt.run(username, email, password, function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      res.json({
        message: 'Signup successful',
        user: { username, email }
      });
    });
    stmt.finalize();
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (!row) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    
    res.json({
      message: 'Login successful',
      user: { username: row.username, email: row.email }
    });
  });
});

// API routes for posts
app.get('/api/posts', (req, res) => {
  db.all('SELECT * FROM posts ORDER BY time DESC', [], (err, posts) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Get all post IDs to fetch likes and comments
    const postIds = posts.map(post => post.id);
    
    // No posts found, return empty array
    if (postIds.length === 0) {
      return res.json([]);
    }
    
    // Fetch likes for all posts
    const placeholders = postIds.map(() => '?').join(',');
    db.all(`SELECT post_id, COUNT(*) as count, GROUP_CONCAT(username) as users FROM likes WHERE post_id IN (${placeholders}) GROUP BY post_id`, 
      postIds, (err, likes) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        
        // Fetch comments for all posts
        db.all(`SELECT * FROM comments WHERE post_id IN (${placeholders}) ORDER BY time ASC`, 
          postIds, (err, comments) => {
            if (err) {
              return res.status(500).json({ error: err.message });
            }
            
            // Attach likes and comments to each post
            const postsWithData = posts.map(post => {
              const postLikes = likes.find(like => like.post_id === post.id);
              const postComments = comments.filter(comment => comment.post_id === post.id);
              
              return {
                ...post,
                likes: postLikes ? {
                  count: postLikes.count,
                  users: postLikes.users ? postLikes.users.split(',') : []
                } : { count: 0, users: [] },
                comments: postComments || []
              };
            });
            
            res.json(postsWithData);
          });
      });
  });
});

app.post('/api/posts', (req, res) => {
  const { author, content, timestamp, image, time } = req.body;
  
  const stmt = db.prepare('INSERT INTO posts (author, content, timestamp, image, time) VALUES (?, ?, ?, ?, ?)');
  stmt.run(author, content, timestamp, image, time, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    res.json({
      message: 'Post created successfully',
      postId: this.lastID
    });
  });
  stmt.finalize();
});

// Like/unlike a post
app.post('/api/posts/:id/like', (req, res) => {
  const postId = req.params.id;
  const { username } = req.body;
  
  // Check if the post exists
  db.get('SELECT * FROM posts WHERE id = ?', [postId], (err, post) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Check if the user already liked the post
    db.get('SELECT * FROM likes WHERE post_id = ? AND username = ?', [postId, username], (err, like) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      if (like) {
        // User already liked the post, so unlike it
        db.run('DELETE FROM likes WHERE post_id = ? AND username = ?', [postId, username], function(err) {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          
          res.json({ message: 'Post unliked successfully' });
        });
      } else {
        // User hasn't liked the post yet, so add a like
        const stmt = db.prepare('INSERT INTO likes (post_id, username) VALUES (?, ?)');
        stmt.run(postId, username, function(err) {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          
          res.json({ message: 'Post liked successfully' });
        });
        stmt.finalize();
      }
    });
  });
});

// Add a comment to a post
app.post('/api/posts/:id/comment', (req, res) => {
  const postId = req.params.id;
  const { author, text } = req.body;
  const time = Date.now();
  
  // Check if the post exists
  db.get('SELECT * FROM posts WHERE id = ?', [postId], (err, post) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Add the comment
    const stmt = db.prepare('INSERT INTO comments (post_id, author, text, time) VALUES (?, ?, ?, ?)');
    stmt.run(postId, author, text, time, function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      
      // Return the created comment
      db.get('SELECT * FROM comments WHERE id = ?', [this.lastID], (err, comment) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        
        res.json({
          message: 'Comment added successfully',
          comment: comment
        });
      });
    });
    stmt.finalize();
  });
});

// Get all comments for a post
app.get('/api/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  
  db.all('SELECT * FROM comments WHERE post_id = ? ORDER BY time ASC', [postId], (err, comments) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    res.json(comments);
  });
});

// API route to check server status
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
