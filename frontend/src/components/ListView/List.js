import React, { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";
//import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const List = ({ input, setInput, todos, setTodos }) => {
  const [mytasks, setTasks] = useState([]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };

  async function fetchAll() {
    try {
      const response = await axios.get("http://localhost:5000/users");
      //console.log(response);
      return response.data.users_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }
  useEffect(() => {
    fetchAll().then((result) => {
      if (result) {
        setTasks(result);
      }
    });
  }, []);

  //const { handleSubmit } = useForm();

  let taskItems = [];

  if (mytasks.length !== 0) {
    let user = mytasks.find((person) => person.name === "Eric");
    taskItems = user.tasks.map((task) => <li className="list">{task.body}</li>);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Form.Group controlId="Task">
        <Form.Control
          type="text"
          placeholder="Enter a 2Do..."
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <Button className="button-add" type="submit">
          Add
        </Button>
        <ul className="ul">{taskItems}</ul>
      </Form.Group>
    </form>
  );
};

export default List;
