import React, { useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";

// import { Form, Button } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';


// const Login = ({ input, setInput, todos, setTodos }) => {
//   const [person, setPerson] = useState(
//     {
//         username: "",
//         password: "",
//     }
// );

// function submitForm(props) {
//   props.handleSubmit(person);
//   setPerson({username: '', password: ''});
// }
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Container fluid="sm">
        <div className="L">
          <h1 className="login-header">Login</h1>
          <form id="login">
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
    </div>
  );
}

export default Login;