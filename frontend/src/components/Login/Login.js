import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "./Login.css";

import axios from "axios";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  //const [test, setTest] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchAll();
    // setTest(result);
    // return result;

    // navigate("/listview");
    if (result === true) {
      //console.log("USER " + user);
      navigate("/listview", {
        state: {
          username: user.trim(),
        },
      });
    } else {
      alert("Username or password is incorrect.");
      console.log("wrong username and password");
      navigate("/");
    }
    setUser("");
    setPassword("");

    // console.log(fetchAll().then(result => console.log(result))).catch( err => console.log(err));
  };

  async function fetchAll() {
    try {
      //const response = await axios.get(
      //  "http://localhost:5000/login?name=" +
      //   user +
      //    "&password=" +
      //    password +
      //    ""
      //);
      const response = await axios.get(
        "https://cpe307-todo-backend.herokuapp.com/login?name=" +
          user +
          "&password=" +
          password +
          ""
      );
      if (response.data.users_list == null) {
        return false;
      }
      return true;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

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
          <form className="login" id="login" onSubmit={handleSubmit}>
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
          <br></br>
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
