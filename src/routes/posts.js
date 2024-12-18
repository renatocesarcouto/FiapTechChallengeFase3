const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// List all posts for students
router.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// List all posts for teachers (admin)
router.get('/api/posts/admin', async (req, res) => {
  try {
    const posts = await Post.getAllForAdmin();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search posts by term
router.get('/api/posts/search', async (req, res) => {
  try {
    const { term } = req.query;
    const posts = await Post.search(term);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific post by ID
router.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.getById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new post
router.post('/api/posts', async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const newPost = await Post.create(title, author, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update existing post
router.put('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, content } = req.body;
    const updatedPost = await Post.update(id, title, author, content);
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete post
router.delete('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Post.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;