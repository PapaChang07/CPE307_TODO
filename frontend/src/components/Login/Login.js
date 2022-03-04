import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "./Login.css";
import axios from "axios";
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
  const [test, setTest] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("IN HANDLESUBMIT");
    const result = await fetchAll();
    console.log("IN FETCHALL: " + result);
    // setTest(result);
    // return result;

    // navigate("/listview");
    if (result === true) {
      console.log("correct!");
      navigate("/listview");
    } else {
      console.log("wrong username and password");
      navigate("/");
    }
    setUser("");
    setPassword("");

    console.log("AFTER HANDLESUBMIT");
    // console.log(fetchAll().then(result => console.log(result))).catch( err => console.log(err));
  };

  async function fetchAll() {
    try {
      const response = await axios.get('http://localhost:5000/login?name='+ user +'&password=' + password +'');
      console.log(response.data.users_list);
      if (response.data.users_list == null){
        console.log("hmmmm")
        return false;
      }
      return true;
    } catch (error) {
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
            <h1 className="login-header">Login</h1>
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
              <Button className="button-add" type="submit">
                Login
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
