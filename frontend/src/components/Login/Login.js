import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "./Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("login");
    navigate("/listview");
  };

  const handleSignUp = (password) => {
    console.log("signup");
    navigate("/signup");
  };

  return (
    <>
      <Container className="login-form">
        <div className="user-pass">
          <h1 className="login-header">Login</h1>
          <br></br>
          <form className="login" id="login" onSubmit={handleLogin}>
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                placeholder="Username..."
                className="username"
                value={user}
                required
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <br></br>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Password..."
                className="username"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br></br>
            <Button className="button-login" type="submit">
              Login
            </Button>
          </form>
          <form id="submit" onSubmit={handleSignUp}>
            <Button className="button-signup" type="submit">
              Don't have an account? Sign Up
            </Button>
          </form>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Login;
