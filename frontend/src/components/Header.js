import React from "react";
import { Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Header = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logged out");
    navigate("/");
  };

  return (
    <Row>
      <form id="submit" onSubmit={handleLogout}>
        <Button className="button-logout" type="submit">Log out</Button>
      </form>
      <div className="header">
        <h1>Your 2Do List</h1>
      </div>
    </Row>
  );
};

export default Header;
