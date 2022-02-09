import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Todo from "./components/todo";
import "./index.css";

function MyApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <List
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <Todo todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  )
}

export default MyApp;