import React, { useState } from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "./Login.css";
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
    navigate('/listview');
  }

  return (
    <>
      <Row className="justify-content-md-center">
        <Container className='login-form'>
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
              <Button className='button-add' type="submit">Login</Button>
            </form>
          </div>
        </Container>
      </Row>
      <Footer></Footer>
    </>
  );
}

export default Login;