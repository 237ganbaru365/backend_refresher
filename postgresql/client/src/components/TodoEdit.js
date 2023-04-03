import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TodoEdit = ({ description, id }) => {
  const [input, setInput] = useState(description);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setInput(description);
  };
  const handleShow = () => setShow(true);

  const handleEditTodo = async (e) => {
    e.preventDefault();

    try {
      const body = { description: input };
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleEditTodo}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoEdit;
