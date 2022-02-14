import React, {useState, useEffect} from 'react';

import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


const Login = ({ input, setInput, todos, setTodos }) => {
  const [person, setPerson] = useState(
    {
        username: "",
        password: "",
    }
);

function submitForm(props) {
  props.handleSubmit(person);
  setPerson({username: '', password: ''});
}
  return (
    <div class = "L">
    <form id="login"> 
    <label><b>Username
      </b>
      </label>
      <input type="text" name="Uname" id="Uname" placeholder="Username"/>
      <br></br>
      <label><b>Password
        </b>
        </label>
        <input type ="Password" name="Pass" id="Pass" placeholder="Password"/>
        <br></br>
        <input type ="button" name="log" id="log" placeholder="Log in"/>
        <br></br>
        
    </form>   
    </div>
  );
}

export default Login;