const express = require("express");
const { check } = require("express-validator");
const app = express();
const cors = require("cors");
const pool = require("./db");

//midleware
app.use(cors());
app.use(express.json()); // req.body objext to get data from client //?? we don't need bodyParser?

/*
--ROUTES--
*/

//create
app.post(
  "/api/todos",
  check("description").not().isEmpty(),
  async (req, res, next) => {
    try {
      const { description } = req.body;
      const newTodo = await pool.query(
        // $1 is to get dynamic value
        // you don'e need semicoron
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
      );

      res.json(newTodo.rows[0]);
    } catch (error) {
      console.error(error.message);
    }
  }
);

//get all todos
app.get("/api/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get a todo
app.get("/api/todos/:tid", async (req, res) => {
  try {
    const tid = req.params.tid;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      tid,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update a todo
app.patch(
  "/api/todos/:tid",
  check("description").not().isEmpty(),
  async (req, res) => {
    try {
      const tid = req.params.tid;
      //!! body is not a function!!
      const { description } = req.body;
      const updateTodo = await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, tid]
      );

      res.json("Todo was updated!");
    } catch (error) {
      console.error(error.message);
    }
  }
);

//delete a todo
app.delete("/api/todos/:tid", async (req, res) => {
  try {
    const tid = req.params.tid;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      tid,
    ]);

    res.json("Todo was deleted!");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000!");
});
