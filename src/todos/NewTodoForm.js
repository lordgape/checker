import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions/todoAction";

import "./NewTodoForm.css";

const NewTodoForm = ({ todos, fireCreateTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        value={inputValue}
        placeholder="Add New Todo"
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          const isDuplicated = todos.some((todo) => todo.text == inputValue);
          if (!isDuplicated) {
            fireCreateTodo(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  fireCreateTodo: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
