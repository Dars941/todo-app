import React, { useState, useEffect } from "react";
import "./Todo.css";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
const Todo = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo("");
    settodo("");
  };

  const eventfresh = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(todos); // Log the updated todos array
  }, [todos]); // Add todos as a dependency to useEffect
  const array = [1, 2, 4, 5];
  return (
    <div className="Container">
      <h1>TODO APP</h1>
      <form className="form-group" onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            settodo(e.target.value);
          }}
          value={todo}
          className="input-form"
          type="text"
          placeholder="Enter your todo"
        />
        <button type="submit">ADD</button>
      </form>
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => (
            <li className="list-itens" key={index}>
              {todo}
              <span>
                <AiFillDelete className="delete-icon"/>
                <FiEdit className="edit-icon" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
