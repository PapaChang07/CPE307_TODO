import React from "react";
import ListView from "./components/ListView/listView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./index.css";

function MyApp() {
  
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
