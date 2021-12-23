const { Pool } = require('pg');

// with env set up, no need to pass variables to pool
// pg automatically will find them in .env
const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
