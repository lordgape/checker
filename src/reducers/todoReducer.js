import { CREATE_TODO, REMOVE_TODO } from "../actions/todoAction";

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
      return state.filter((todo) => payload != todo.text);
    }
    default:
      return state;
  }
};
