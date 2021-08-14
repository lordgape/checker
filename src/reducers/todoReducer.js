import {
  CREATE_TODO,
  MARK_TODO_AS_COMPLETED,
  REMOVE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
} from "../actions/todoAction";

let initialTodoState = {
  data: [],
  isLoading: false,
};

export const todos = (state = initialTodoState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      let newTodoList = state.data.concat(payload);
      return { ...state, data: newTodoList };
    }
    case REMOVE_TODO: {
      let newTodoList = state.data.filter((todo) => payload.id !== todo.id);
      return { ...state, data: newTodoList };
    }
    case MARK_TODO_AS_COMPLETED: {
      let newTodoList = state.data.map((todo) => {
        if (payload.id === todo.id) todo.isCompleted = true;
        return todo;
      });

      return { ...state, data: newTodoList };
    }

    case LOAD_TODOS_SUCCESS: {
      return { data: payload, isLoading: false };
    }
    case LOAD_TODOS_FAILURE:
      return { ...state, isLoading: false };
    case LOAD_TODOS_IN_PROGRESS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
