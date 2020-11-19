import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "../thunks/todoThunks"

import "./NewTodoForm.css";



const NewTodoForm = ({ todos, fireCreateTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const keyPressed = e => {
    if(e.keyCode == 13)
    {
      fireCreateTodo(inputValue)
      setInputValue("");
    }
      
  }

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        value={inputValue}
        placeholder="Add New Todo"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={keyPressed}
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
  todos: state.todos.list,
});

const mapDispatchToProps = (dispatch) => ({
  fireCreateTodo: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
