import TodoEdit from "./TodoEdit";

const TodoList = ({ todos, setTodos }) => {
  const deleteTodoHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((t) => t.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <table className="table table-striped mt-5 text-center">
      <thead>
        <tr>
          <th>description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(
          ({ description, todo_id }) =>
            description && (
              <tr key={todo_id}>
                <th>{description}</th>
                <th>
                  <TodoEdit description={description} id={todo_id} />
                </th>
                <th>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodoHandler(todo_id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

export default TodoList;
