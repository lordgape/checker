import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { removeTodo } from "../actions/todoAction";

const TodoList = ({ todos = [], fireRemoveTodo }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, i) => (
      <TodoListItem key={i} todo={todo} fireRemoveTodo={fireRemoveTodo} />
    ))}
  </div>
);
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  fireRemoveTodo: (text) => dispatch(removeTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
