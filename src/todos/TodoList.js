import{React, useEffect} from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { loadTodosRequest, markAsCompletedRequest, removeTodoRequest } from "../thunks/todoThunks";

const TodoList = ({ todos = [], fireRemoveTodo, fireMarkTodoAsCompleted, fireLoadTodo, isLoading }) => {

  useEffect(() => {
    fireLoadTodo();
  }, [])

  const loadingMessage =  <div>Loading Todos...</div>

  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          fireRemoveTodo={fireRemoveTodo}
          fireMarkTodoAsCompleted={fireMarkTodoAsCompleted}
        />
      ))}
    </div>
  );
  
return isLoading ? loadingMessage : content;

};

const mapStateToProps = (state) => ({
  todos: state.todos.list,
  isLoading: state.todos.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  fireRemoveTodo: (id) => dispatch(removeTodoRequest(id)),
  fireMarkTodoAsCompleted: (id) => dispatch(markAsCompletedRequest(id)),
  fireLoadTodo: () => dispatch(loadTodosRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
