import { useEffect, useState } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./App.css";

const API_URL = "http://localhost:5000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchAllTodos = async () => {
    try {
      const response = await fetch(API_URL);

      const data = await response.json();

      setTodos(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllTodos();
  }, [todos]);

  return (
    <>
      <TodoInput todos={todos} setTodos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
