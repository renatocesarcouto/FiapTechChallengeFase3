const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const Post = require('../models/Post');

// Rota para listar todos os posts para alunos
router.get('/', async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para listar todos os posts para professores
router.get('/admin', async (req, res) => {
  try {
    const allPosts = await Post.getAllForAdmin();
    res.json(allPosts);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para buscar posts
router.get('/search', async (req, res) => {
  try {
    const { term } = req.query;
    const posts = await Post.search(term);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para obter um post específico
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.getById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para criar um novo post
router.post('/', upload.none(), async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const newPost = await Post.create(title, author, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para atualizar um post existente
router.put('/:id', upload.none(), async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const updatedPost = await Post.update(req.params.id, title, author, content);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ error: 'Post não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para deletar um post
router.delete('/:id', async (req, res) => {
  try {
    await Post.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


module.exports = router;
