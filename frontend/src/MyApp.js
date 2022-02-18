import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ListView from "./components/ListView/listView";
import Login from "./components/Login/Login";

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
