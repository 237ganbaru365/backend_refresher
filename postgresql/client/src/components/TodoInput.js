import { useState } from "react";

const API_URL = "http://localhost:5000/api/todos";

const TodoInput = ({ todos, setTodos }) => {
  const [description, setDescription] = useState("");

  const changeHandler = (e) => {
    setDescription((prev) => e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setTodos((prev) => [...prev, description]);

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={submitHandler}>
        <input
          className="form-control"
          type="text"
          name="input"
          placeholder="todo here.."
          value={description}
          onChange={changeHandler}
          required
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoInput;
