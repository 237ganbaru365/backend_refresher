const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "xxxx", // type your real pasword
  host: "localhost",
  port: 5432,
  database: "sample_todo",
});

module.exports = pool;
