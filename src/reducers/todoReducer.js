import {
  CREATE_TODO,
  MARK_TODO_AS_COMPLETED,
  REMOVE_TODO,
} from "../actions/todoAction";

let initialTodoState = [];

export const todos = (state = initialTodoState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const newTodo = {
        text: payload,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      return state.filter((todo) => payload !== todo.text);
    }
    case MARK_TODO_AS_COMPLETED: {
      return state.map((todo) => {
        if (payload == todo.text) todo.isCompleted = true;
      });
    }
    default:
      return state;
  }
};
