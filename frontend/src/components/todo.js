import React from "react";
import axios from "axios";


const Todo = ({ todos, setTodos, setEditTodo, user, setUser }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      }) );
      let filtered = todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      });
      
     let newTodos = [];
  for (let x in filtered) {
      newTodos.push({ body: filtered[x].title, flag: filtered[x].completed });
    }
    console.log(newTodos);
    console.log(user);
    user.tasks = newTodos;
    setUser(user)
    console.log(newTodos);
    updateCurrUser(user);
   };

   async function updateCurrUser(user) {
    try {
      console.log(user);
      // const response = await axios.put("https://cpe307-todo-backend.herokuapp.com/users", user);
      const response = await axios.put("http://localhost:5000/users", user);
      console.log(response);
      return response.data;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
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
      newTodos.push({ body: filtered[x].title, flag: filtered[x].completed });
    }
    console.log(newTodos);
    console.log(user);
    user.tasks = newTodos;
    setUser(user)
    console.log(newTodos);
    updateCurrUser(user);
   };

   async function updateCurrUser(user) {
    try {
      console.log(user);
      // const response = await axios.put("https://cpe307-todo-backend.herokuapp.com/users", user);
      const response = await axios.put("http://localhost:5000/users", user);
      console.log(response);
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
