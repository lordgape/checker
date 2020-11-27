import { expect } from "chai";
import { todos } from "../../reducers/todoReducer";
import {
  CREATE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  MARK_TODO_AS_COMPLETED,
  REMOVE_TODO,
} from "../../actions/todoAction";

describe("The Todos Reducer", () => {
  it("Can add new todos", () => {
    const fakeTodo = { text: "Get paid in Dollars", isCompleted: false };
    const fakeAction = {
      type: CREATE_TODO,
      payload: fakeTodo,
    };

    const originalState = { isLoading: false, data: [] };

    const expected = { isLoading: false, data: [fakeTodo] };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it("Can remove a todo", () => {
    const fakeTodo = { text: "Earn $16000 monthly", isCompleted: true, id: 1 };

    const fakeAction = {
      type: REMOVE_TODO,
      payload: fakeTodo,
    };

    const originalState = { isLoading: false, data: [fakeTodo] };

    const expected = { isLoading: false, data: [] };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it("Can update a todo's isCompleted state to true", () => {
    const fakeTodo = { text: "Be the best in IT", isCompleted: false, id: 1 };

    const fakeAction = {
      type: MARK_TODO_AS_COMPLETED,
      payload: fakeTodo,
    };

    const originalState = { isLoading: false, data: [fakeTodo] };

    const expected = {
      isLoading: false,
      data: [{ ...fakeTodo, isCompleted: true }],
    };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });

  it("Can add new list of todos", () => {
      const fakeTodos = [{text:"Bear fruit of righteous", isCompleted:false}]
      const fakeAction = {
          type: LOAD_TODOS_SUCCESS,
          payload:fakeTodos
      }

      const originalState = {isLoading:true, data:[]};
      const expected = {isLoading:false,data:fakeTodos}

      const actual = todos(originalState,fakeAction);
     
      expect(actual).to.deep.equal(expected);
  });

  it("Can update isLoading state of todos to false ", () => {
    const fakeAction1 = {
      type: LOAD_TODOS_FAILURE,
    };
    const fakeAction2 = {
      type: LOAD_TODOS_SUCCESS,
      payload: [],
    };
    const originalState = { isLoading: true, data: [] };

    const expected = { isLoading: false, data: [] };

    const actual1 = todos(originalState, fakeAction1);
    const actual2 = todos(originalState, fakeAction2);

    expect(actual1).to.deep.equal(expected);
    expect(actual2).to.deep.equal(expected);
  });
  
  it("Can update isLoading state of todos to true ", () => {
    const fakeAction = {
      type: LOAD_TODOS_IN_PROGRESS,
    };
   
    const originalState = { isLoading: false, data: [] };

    const expected = { isLoading: true, data: [] };

    const actual = todos(originalState, fakeAction);   

    expect(actual).to.deep.equal(expected);
    
  });
});
