import {expect} from "chai"
import {todos} from "../../reducers/todoReducer"
import { CREATE_TODO } from "../../actions/todoAction"

describe("The Todos Reducer", () => {

    it("Can add new todos", () => {
        const fakeTodo = {text:"Get paid in Dollars",isCompleted:false}
        const fakeAction = {
            action : CREATE_TODO,
            payload: fakeTodo
        }

        const originalState = {isLoading:false,data:[]}

        const expected = {isLoading:false, data:[fakeTodo]};

        const actual = todos(originalState,fakeAction);

        expect(actual).to.deep.equal(expected);
    })
})