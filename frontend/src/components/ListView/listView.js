import React, { useState, useEffect } from "react";
import Todo from "../todo";
import List from "./List";
import Footer from "../Footer";
import Header from "../Header";
import { Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./list.css";

function ListView() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [user, setUser] = useState("");
  const [myTasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
  useEffect(() => {
    fetchAll().then((result) => {
      if (result) {
        let tasks = [];

        let user = result.find((person) => person.name === "Juan");
        console.log(user);
        let items = user.tasks.map((task) => (
           {body: task.body}
        ));
        setTasks(items);
        console.log(myTasks);
        setUser(user);
        for (let x in user.tasks) {
          console.log(x);

          setInput(user.tasks[x].body);
          setTodos([
            ...tasks,
            { id: uuidv4(), title: user.tasks[x].body, completed: user.tasks.flag },
          ]);
          tasks.push({
            id: uuidv4(),
            title: user.tasks[x].body,
            completed: user.tasks.flag,
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
                user = {user}
                setUser = {setUser}
                myTasks = {myTasks}
                setTasks = {setTasks}
              />
            </div>
            <div>
              <Todo
                todos={todos}
                setTodos={setTodos}
                setEditTodo={setEditTodo}
                user ={user}
                setUser = {setUser}

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
