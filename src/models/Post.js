const pool = require('../db');

class Post {
  // Método para obter todos os posts para alunos
  static async getAll() {
    const result = await pool.query('SELECT * FROM posts ORDER BY date DESC LIMIT 10');
    return result.rows;
  }

  // Método para obter todos os posts para professores
  static async getAllForAdmin() {
    const result = await pool.query('SELECT * FROM posts ORDER BY id DESC');
    return result.rows;
  }

  // Método para buscar posts por termo
  static async search(term) {
    const result = await pool.query(
      'SELECT * FROM posts WHERE title ILIKE $1 OR content ILIKE $1',
      [`%${term}%`]
    );
    return result.rows;
  }
  // Método para obter um post específico por ID
  static async getById(id) {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    return result.rows[0];
  }

  // Método para criar um novo post
  static async create(title, author, content) {
    const result = await pool.query(
      'INSERT INTO posts (title, author, date, content) VALUES ($1, $2, NOW(), $3) RETURNING *',
      [title, author, content]
    );
    return result.rows[0];
  }

  // Método para atualizar um post existente
  static async update(id, title, author, content) {
    const result = await pool.query(
      'UPDATE posts SET title = $1, author = $2, content = $3 WHERE id = $4 RETURNING *',
      [title, author, content, id]
    );
    return result.rows[0];
  }

  // Método para deletar um post
  static async delete(id) {
    await pool.query('DELETE FROM posts WHERE id = $1', [id]);
  }

}

module.exports = Post;
