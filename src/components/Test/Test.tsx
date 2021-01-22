import React from 'react';

import genie from 'assets/img/genie.png'

import { IAddTask } from "../../types/reducers/test";
import styled from '@emotion/styled';

interface ITestProps {
    addTask: (payload: IAddTask) => void
    todos: string[];
}

const Logo = styled.img`
    width: 80px;
    height: 80px;
`

export const Test = (props: ITestProps) => {
    const { todos, addTask } = props;
    return (
        <div>
            <Logo src={genie} />
            <div> Todo list:</div>
            {todos.map(task => <div>{task}</div>)}
            <button onClick={() => addTask({ task: 'new task to do' })}>Add new task</button>
        </div>
    );
}