import { expect } from "chai";

import {
  getCompletedTodos,
  getIncompletedTodos,
  getTodos,
  isTodoLoading,
} from "../../selectors/todoSelectors";

describe("The Todos Selector", () => {
  it("Can get all todos", () => {
    const fakeTodos = [
      { text: "Be the best" },
      { text: "Earn $16000 by grace" },
    ];

    const todoOriginalState = {
      isLoading: false,
      data: fakeTodos,
    };

    const expected = fakeTodos;

    const store = { todos: todoOriginalState };

    const actual = getTodos(store);

    expect(actual).to.deep.equal(expected);
  });

  it("Can tell if todo is loading", () => {
    const todosFirstOriginalState = {
      isLoading: true,
      data: [],
    };

    const store = { todos: todosFirstOriginalState };

    const expected = true;

    const actual = isTodoLoading(store);

    expect(actual).to.deep.equal(expected);
  });

  it("Can get completed todo", () => {
    const fakeTodos = [
      {
        text: "Be the best",
        isCompleted: false,
      },
      {
        text: "Earn $16000",
        isCompleted: true,
      },
    ];

    const expected = [
      {
        text: "Earn $16000",
        isCompleted: true,
      },
    ];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });

  it("Can get incompleted todo", () => {
    const fakeTodos = [
      {
        text: "Be the best",
        isCompleted: false,
      },
      {
        text: "Earn $16000",
        isCompleted: true,
      },
    ];

    const expected = [
      {
        text: "Be the best",
        isCompleted: false,
      },
    ];

    const actual = getIncompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
