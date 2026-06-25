import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodosAsync, deleteTodoAsync, toggleTodoAsync } from '../../store/actions/todoActions';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

export default function TodoList() {
    const dispatch = useDispatch();

    const { items: todos, isLoading } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, []);

    const handleDelete = (id) => dispatch(deleteTodoAsync(id));
    const handleToggle = (id) => dispatch(toggleTodoAsync(id));

    if (isLoading) {
        return <div className="todo-list__loading">Loading tasks...</div>;
    }

    return (
        <div className="todo-list__container">
            <ul className="todo-list">
                {todos.length === 0 ? (
                    <p className="todo-list__empty">There are no tasks...</p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={handleDelete}
                            onToggle={handleToggle}
                        />
                    ))
                )}
            </ul>
        </div>
    );
};