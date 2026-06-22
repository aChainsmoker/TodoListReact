import { todoApi } from '../../api/todoApi';
import {
    FETCH_TODOS_LOAD,
    FETCH_TODOS,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
} from './types';

const fetchTodosLoading = () => ({ type: FETCH_TODOS_LOAD });
const fetchTodos = (todos) => ({ type: FETCH_TODOS, payload: todos });
const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
const toggleTodo = (id) => ({type: TOGGLE_TODO, payload: id})

export const fetchTodosAsync = () => async (dispatch) => {
    dispatch(fetchTodosLoading());
    const todos = await todoApi.fetchTodos();
    dispatch(fetchTodos(todos));

};

export const addTodoAsync = (text) => async (dispatch) => {
    const newTodo = await todoApi.addTodo(text);
    dispatch(addTodo(newTodo));

};

export const deleteTodoAsync = (id) => async (dispatch) => {
    await todoApi.deleteTodo(id);
    dispatch(deleteTodo(id));
};

export const toggleTodoAsync = (id) => async (dispatch) => {
    await todoApi.toggleTodo(id);
    dispatch(toggleTodo(id));
};
