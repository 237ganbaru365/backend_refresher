const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Na3579fumi",
  host: "localhost",
  port: 5432,
  database: "sample_todo",
});

module.exports = pool;
