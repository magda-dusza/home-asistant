import '@testing-library/jest-dom';
import { testReducer } from '../testReducer';
import { TEST_ADD_TASK } from 'actions/testActions';


describe('Test Reducer', () => {
    it('should add task to list', () => {
        // given
        const currentState = { todos: [] };
        const task = 'Run the tests'
        const action = {
            type: TEST_ADD_TASK,
            payload: {
                task
            }
        }
        // when
        const newState = testReducer(currentState, action)

        // then
        expect(newState).toEqual({ todos: [task] })
    })
})