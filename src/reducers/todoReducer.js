import {
  CREATE_TODO,
  MARK_TODO_AS_COMPLETED,
  REMOVE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
} from "../actions/todoAction";

let initialTodoState = {
  list: [],
  isLoading: false,
};

export const todos = (state = initialTodoState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {      
      let newTodoList = state.list.concat(payload);
      return { ...state, list: newTodoList };
    }
    case REMOVE_TODO: {
      let newTodoList = state.list.filter((todo) => payload.id !== todo.id);
      return { ...state, list: newTodoList };
    }
    case MARK_TODO_AS_COMPLETED: {
      let newTodoList = state.list.map((todo) => {
        if (payload.id == todo.id) todo.isCompleted = true;
        return todo;
      });

      return { ...state, list: newTodoList };
    }

    case LOAD_TODOS_SUCCESS: {
      return { list: payload, isLoading: false };
    }
    case LOAD_TODOS_FAILURE:
      return { ...state, isLoading: false };
    case LOAD_TODOS_IN_PROGRESS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
