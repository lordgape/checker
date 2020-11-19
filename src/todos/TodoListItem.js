import React from "react";
import Todolist from "./TodoList";
import "./TodoListItem.css";

const TodoListItem = ({ todo, fireRemoveTodo, fireMarkTodoAsCompleted }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? null : (
          <button
            className="completed-button"
            onClick={() => fireMarkTodoAsCompleted(todo.id)}
          >
            Mark as Completed{" "}
          </button>
        )}
        <button
          onClick={() => fireRemoveTodo(todo.id)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
