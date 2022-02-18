<<<<<<< HEAD
import React, { useState } from "react";
import Todo from "../todo";
import List from "./List";
import Footer from "../Footer";
import Header from "../Header";
import { Row } from "react-bootstrap";
import "./list.css";

function ListView() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <>
            <Row>
                <div className="header">
                    <Header />
                </div>
            </Row>
            <Row>
                <div className="container">
                    <div className="app-wrapper">
                        <div>
                            <List
                                input={input}
                                setInput={setInput}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        </div>
                        <div>
                            <Todo todos={todos} setTodos={setTodos} />
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="footer-col col-md-4">
                    <Footer />
                </div>
            </Row>
        </>
    )
}

=======
import React, { useState } from "react";
import Todo from "../todo";
import List from "./List";
import Footer from "../Footer";
import Header from "../Header";
import { Row } from "react-bootstrap";

function ListView() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <>
            <Row>
                <div className="header">
                    <Header />
                </div>
            </Row>
            <Row>
                <div className="container">
                    <div className="app-wrapper">
                        <div>
                            <List
                                input={input}
                                setInput={setInput}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        </div>
                        <div>
                            <Todo todos={todos} setTodos={setTodos} />
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="footer-col col-md-4">
                    <Footer />
                </div>
            </Row>
        </>
    )
}

>>>>>>> 07625e40ed50ce4b4a436eb47204b059b47d3abd
export default ListView;