import{React, useEffect} from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { loadTodosRequest, markAsCompletedRequest, removeTodoRequest } from "../thunks/todoThunks";
import { getCompletedTodos, getIncompletedTodos, getTodos, isTodoLoading } from "../selectors/todoSelectors";
import styled from "styled-components"

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({ incompletedTodos, completedTodos, fireRemoveTodo, fireMarkTodoAsCompleted, fireLoadTodo, isLoading }) => {

  useEffect(() => {
    fireLoadTodo();
  }, [])

  const loadingMessage =  <div>Loading Todos...</div>

  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incompleted Todos:</h3>
      {incompletedTodos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          fireRemoveTodo={fireRemoveTodo}
          fireMarkTodoAsCompleted={fireMarkTodoAsCompleted}
        />
      ))}
      <h3>Completed Todos:</h3>
      {completedTodos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          fireRemoveTodo={fireRemoveTodo}
          fireMarkTodoAsCompleted={fireMarkTodoAsCompleted}
        />
      ))}
    </ListWrapper>
  );
  
return isLoading ? loadingMessage : content;

};

const mapStateToProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompletedTodos(state),
  isLoading: isTodoLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  fireRemoveTodo: (id) => dispatch(removeTodoRequest(id)),
  fireMarkTodoAsCompleted: (id) => dispatch(markAsCompletedRequest(id)),
  fireLoadTodo: () => dispatch(loadTodosRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
