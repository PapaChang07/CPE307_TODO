import React, { useState, useEffect } from "react";
import Todo from "../todo";
import List from "./List";
import Footer from "../Footer";
import Header from "../Header";
import { Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./list.css";
import { useLocation } from "react-router-dom";

function ListView() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const { state } = useLocation();
  const { username } = state ? state : "Juan";
  const [user, setUser] = useState("");
  const [myTasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  async function fetchAll() {
    try {
      const response = await axios.get(
        "https://cpe307-todo-backend.herokuapp.com/users"
      );
      //const response = await axios.get("http://localhost:5000/users");
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
        let tasks = [];
        let items = [];
        let user = undefined;
        user = result.find((person) => person.name === username.trim());
        if (user === undefined) {
          user = { name: username, password: "hellp", tasks: [] };
        }
        for (let x in user.tasks) {
          items.push({
            body: user.tasks[x].body,
            completed: user.tasks[x].completed,
          });
        }
        setTasks(items);
        setUser(user);
        for (let x in items) {
          setInput(user.tasks[x].body);
          let id = uuidv4();
          setTodos([
            ...tasks,
            { id: id, title: items[x].body, completed: items[x].completed },
          ]);
          tasks.push({
            id: id,
            title: items[x].body,
            completed: items[x].completed,
          });

          setInput("");
        }
      }
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Row>
        <div className="container">
          <div className="app-wrapper">
            <div>
              <List
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                user={user}
                setUser={setUser}
                myTasks={myTasks}
                setTasks={setTasks}
              />
            </div>
            <div>
              <Todo
                todos={todos}
                setTodos={setTodos}
                setEditTodo={setEditTodo}
                user={user}
                setUser={setUser}
              />
            </div>
          </div>
        </div>
      </Row>
      <Footer />
    </>
  );
}

export default ListView;
