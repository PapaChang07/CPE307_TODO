import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ListView from "./components/ListView/listView";
import Login from "./components/Login/Login";

function MyApp() {

=======
import ListView from "./components/ListView/listView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./index.css";

function MyApp() {
  
>>>>>>> 07625e40ed50ce4b4a436eb47204b059b47d3abd
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listview" element={<ListView />} />
      </Routes>
    </Router>
  )
}

export default MyApp;
