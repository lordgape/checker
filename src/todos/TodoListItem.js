import React from "react";
import Todolist from "./TodoList";
import "./TodoListItem.css";

const TodoListItem = ({ todo, fireRemoveTodo }) => {
  
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button className="completed-button">Mark as Completed </button>
        <button
          onClick={() => fireRemoveTodo(todo.text)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
