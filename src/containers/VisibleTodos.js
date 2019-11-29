import TodoList from '../components/TodoList.js';
import { toggleTodo } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id })
    toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);