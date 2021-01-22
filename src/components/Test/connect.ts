import { connect } from 'react-redux';
import { addTask } from "../../actions/testActions";
import { IAddTask } from "../../types/reducers/test";
import { Test } from "./Test";

const mapStateToProps = (state: any) => ({
    todos: state.test.todos
})
const mapDispatchToProps = (dispatch: any) => ({
    addTask: (payload: IAddTask) => dispatch(addTask(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)