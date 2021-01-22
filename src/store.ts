import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'

const logger = () => (next: any) => (action: any) => {
    console.log('will dispatch', action)
    const returnValue = next(action)
    return returnValue
}

export const store = createStore(reducer, applyMiddleware(logger))