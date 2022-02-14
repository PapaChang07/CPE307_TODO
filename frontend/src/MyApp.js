import React, { useState } from "react";
import Header from "./components/Header";
//import List from "./components/List";
import Todo from "./components/todo";
//import Footer from "./components/Footer";
import { Row } from "react-bootstrap";
import "./index.css";
import Login from "./components/Login"
function MyApp() {
  //const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Row>
        <div className="header">
          <Header/>
        </div>
      </Row>
      <Row>
        <div className="container">
          <div className="app-wrapper">
            <div>
              <Login
              />
            </div>
            <div>
              <Todo todos={todos} setTodos={setTodos} />
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="footer-col col-md-4">
          <footer/>
        </div>
      </Row>
    </>
  )
}

export default MyApp;