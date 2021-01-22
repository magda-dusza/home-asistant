import { TEST_ADD_TASK } from "../actions/testActions"
import { ActionType } from "../types/common/actions"
import { ITestState } from "../types/reducers/test"

const initState: ITestState = {
    todos: []
}

export const testReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case TEST_ADD_TASK:
            const { task } = action.payload
            return {
                ...state,
                todos: [...state.todos, task]
            }
        default:
            return state;
    }
}