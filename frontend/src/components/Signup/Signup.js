import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";
import "./Signup.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("IN SUBMIT")
    const ret =  await updateCurrUser(user, password) ;
    console.log("listview");
    //console.log(ret.user)
    console.log(user)
    console.log(ret.name)
    navigate("/listview", {
      state: {
        username: user.trim(),
      },
    });
  };

  const handleLogin = () => {
    console.log("login");
    navigate("/");
  };

  async function updateCurrUser(user, password) {
    try {
      console.log("UPDATE")
      console.log(user, password);
      const response = await axios.post(
        "https://cpe307-todo-backend.herokuapp.com/users",
        { name: user, password: password }
      );
      console.log("AFTER POST")
      //const response = await axios.post("http://localhost:5000/signup", {
      //  name: user,
      //  password: password,
      //});
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("ERROR OCCURS")
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

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
              <Button className="button-login" type="submit">
                Sign Up
              </Button>
            </form>
            <form id="submit" onSubmit={handleLogin}>
              <Button className="button-signup" type="submit">
                Already have an account? Login
              </Button>
            </form>
          </div>
        </Container>
      </Row>
      <Footer></Footer>
    </>
  );
}

export default Login;
