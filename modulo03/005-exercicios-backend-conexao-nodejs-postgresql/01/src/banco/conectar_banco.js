const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "prs.1357",
  database: "biblioteca",
});

module.exports = pool;
