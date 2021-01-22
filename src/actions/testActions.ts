import { IAddTask } from "../types/reducers/test";

export const TEST_ADD_TASK = 'TEST_ADD_TASK';
export const addTask = (payload: IAddTask) => ({
    type: TEST_ADD_TASK,
    payload
}) 