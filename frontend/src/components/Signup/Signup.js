import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "./Signup.css";
// import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';

// function submitForm(props) {
//   props.handleSubmit(person);
//   setPerson({username: '', password: ''});
// }

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("listview");
    navigate("/listview");
  };

  const handleLogin = () => {
    console.log("login");
    navigate("/");
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Container className="login-form">
          <div className="L">
            <h1 className="login-header">Signup</h1>
            <br></br>
            <form id="login" onSubmit={handleSubmit}>
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
              <Button className="button-login" type="submit">Sign Up</Button>
            </form>
            <form id="submit" onSubmit={handleLogin}>
              <Button className="button-signup" type="submit">Already have an account? Login</Button>
            </form>

          </div>
        </Container>
      </Row>
      <Footer></Footer>
    </>
  );
}

export default Login;
