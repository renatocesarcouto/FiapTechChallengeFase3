const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'blogdb',
  password: 'password',
  port: 5432,
});

module.exports = pool;
