import React from "react";
import ListView from "./components/ListView/listView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./index.css";

function MyApp() {
  
  return (
    <>
      <Row>
        <div className="header">
          <Header />
        </div>
      </Row>
      <Row>
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
      </Row>
      <Row>
        <div className="footer-col col-md-4">
          <Footer />
        </div>
      </Row>
    </>
  );
}

export default MyApp;
