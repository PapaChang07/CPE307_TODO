import React from "react";
import axios from "axios";

const Todo = ({ todos, setTodos, setEditTodo, user, setUser }) => {
  const handleComplete = (todo) => {
    //console.log(todo);
    //console.log(todos);
    let changedTodos = [];
    for (let x in todos) {
      if (todo.id === todos[x].id) {
        //console.log(todo.id);
        changedTodos.push({
          id: todos[x].id,
          title: todos[x].title,
          completed: !todo.completed,
        });
      } else {
        changedTodos.push({
          id: todos[x].id,
          title: todos[x].title,
          completed: todos[x].completed,
        });
      }
    }
    //console.log(changedTodos);

    setTodos(changedTodos);
    let filtered = [];
    for (let x in changedTodos) {
      filtered.push({
        body: changedTodos[x].title,
        completed: changedTodos[x].completed,
      });
    }
    user.tasks = filtered;
    setUser(user);
    updateCurrUser(user);
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    let filtered = todos.filter((todo) => todo.id !== id);
    let newTodos = [];
    for (let x in filtered) {
      newTodos.push({
        body: filtered[x].title,
        completed: filtered[x].completed,
      });
    }

    user.tasks = newTodos;
    setUser(user);
    updateCurrUser(user);
  };

  async function updateCurrUser(user) {
    try {
      const response = await axios.put(
        "https://cpe307-todo-backend.herokuapp.com/users",
        user
      );
      //const response = await axios.put("http://localhost:5000/users", user);
      return response.data;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todo;
