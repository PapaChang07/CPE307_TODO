import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
//import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./list.css";

const List = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const [mytasks, setTasks] = useState([]);
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
      newTodos.push({ body: newTodo[x].title, flag: todos[x].completed });
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
        newTodos.push({ body: todos[x].title, flag: todos[x].completed });
      }
      newTodos.push(newTsk);
      user.tasks = newTodos;
      console.log(newTodos);
      updateCurrUser(user);
      //const resp = axios.put("https://cpe307-todo-backend.herokuapp.com/users", user )
      //console.log("put");
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  async function fetchAll() {
    try {
      //const response = await axios.get("https://cpe307-todo-backend.herokuapp.com/users");
      const response = await axios.get("http://localhost:5000/users");
      //console.log(response);
      return response.data.users_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  async function updateCurrUser(user) {
    try {
      console.log(user);
      // const response = await axios.put("https://cpe307-todo-backend.herokuapp.com/users", user);
      const response = await axios.put("http://localhost:5000/users", user);
      console.log(response);
      return response.data;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchAll().then((result) => {
      if (result) {
        let tasks = [];

        let user = result.find((person) => person.name === "Juan");
        console.log(user);
        let items = user.tasks.map((task) => (
          <li className="list">{task.body}</li>
        ));
        setTasks(items);
        console.log(mytasks);
        setUser(user);
        for (let x in user.tasks) {
          console.log(x);
          setEditTodo("");

          setInput(user.tasks[x].body);
          setTodos([
            ...tasks,
            { id: uuidv4(), title: user.tasks[x].body, completed: false },
          ]);
          tasks.push({
            id: uuidv4(),
            title: user.tasks[x].body,
            completed: false,
          });
          setInput("");
          setEditTodo("");
        }
      }
    });
  }, []);

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
