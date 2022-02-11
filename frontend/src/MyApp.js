import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Todo from "./components/todo";
import Footer from "./components/Footer";
import "./index.css";

function MyApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="header">
      <Header/>
      <div className="container">
        <div className="app-wrapper">
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
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MyApp;