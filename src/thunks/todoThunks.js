import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markTodoAsCompleted,
} from "../actions/todoAction";

export const loadTodosRequest = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());

    const response = await fetch("http://localhost:8080/todos-delay");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure);
    console.log(error);
  }
};

export const addTodoRequest = (text) => async (dispatch,getState) => {
    try {
      
      const body = JSON.stringify({text});

      const response = await fetch("http://localhost:8080/todos",{
        headers: {
          "Content-Type" : "application/json",
        },
        method: "POST",
        body,
      });

      const todo = await response.json();

      dispatch(createTodo(todo));
      

    } catch (error) {
      console.log(`Error from addTodoRequest - message ${error.messages} - ${JSON.stringify(error)}`);
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`,{
          method:"delete"
        });

        const todo = await response.json();

        dispatch(removeTodo(todo));

    } catch (error) {
      console.log(`Error from removeTodoRequest - message ${error.messages} - ${JSON.stringify(error)}`);
    }
}

export const markAsCompletedRequest = id => async dispatch => {
  try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`,
        {
          method:"post"
        });

        const todo = await response.json();

        dispatch(markTodoAsCompleted(todo));

  } catch (error) {
    
  }
}
