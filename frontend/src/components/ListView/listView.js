import React, { useState, useEffect } from "react";
import Todo from "../todo";
import List from "./List";
import Footer from "../Footer";
import Header from "../Header";
import { Row } from "react-bootstrap";
import "./list.css";

function ListView() {
  //const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
              />
            </div>
            <div>
              <Todo
                todos={todos}
                setTodos={setTodos}
                setEditTodo={setEditTodo}
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
