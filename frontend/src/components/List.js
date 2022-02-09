import React from 'react';
import { Form, Button } from 'react-bootstrap';
//import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const List = ({ input, setInput, todos, setTodos }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
        setInput("");
    };

    //const { handleSubmit } = useForm();

    return (
        <form onSubmit={onFormSubmit}>
            <Form.Group controlId="Task">
                <Form.Control
                    type="text"
                    placeholder="Enter a 2Do..."
                    className="task-input"
                    value={input}
                    required
                    onChange={onInputChange}
                />
                <Button className="button-add" type="submit">Add</Button>
            </Form.Group>
        </form>
    )
}

export default List;