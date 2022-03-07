import React from "react";
import { useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
 
import {
  useLocation
} from "react-router-dom";
//import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./list.css";

 
const List = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const [mytasks, setTasks] = useState([]);
  const {state} = useLocation();
  const {username}  = state ? state : "Juan";
  const [user, setUser] = useState("");
 


  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    let newTodos = [];
    for (let x in newTodo) {
      newTodos.push({ body: newTodo[x].title, completed: todos[x].completed });
    }
    user.tasks = newTodos;
    console.log(newTodos);
    updateCurrUser(user);
    setTodos(newTodo);
    setEditTodo("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      let newTsk = { body: input };
      let newTodos = [];
      for (let x in todos) {
        newTodos.push({ body: todos[x].title, completed: todos[x].completed });
      }
      newTodos.push(newTsk);
      user.tasks = newTodos;
      console.log(newTodos);
      updateCurrUser(user);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

 

  async function updateCurrUser(user) {
    try {
      console.log(user);
      const response = await axios.put("https://cpe307-todo-backend.herokuapp.com/users", user);
      //const response = await axios.put("http://localhost:5000/users", user);
      console.log(response);
      return response.data;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

 

  //const { handleSubmit } = useForm();

  let taskItems = [];

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
