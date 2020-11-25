import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "../selectors/todoSelectors";
import { addTodoRequest } from "../thunks/todoThunks";
import {NewTodoFormContainer, NewTodoInput, NewTodoButton } from  "./NewTodoFormStyled"



const NewTodoForm = ({ todos, fireCreateTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const keyPressed = (e) => {
    if (e.keyCode == 13) {
      const isDuplicated = todos.some((todo) => todo.text == inputValue);
      if (!isDuplicated) {
        fireCreateTodo(inputValue);
        setInputValue("");
      }
    }
  };

  return (
    <NewTodoFormContainer>
      <NewTodoInput
        className="new-todo-input"
        value={inputValue}
        placeholder="Add New Todo"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={keyPressed}
        type="text"
      />
      <NewTodoButton
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
      </NewTodoButton>
    </NewTodoFormContainer>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  fireCreateTodo: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
