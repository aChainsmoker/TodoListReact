import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TodoItem.css';

export default function TodoItem ({ todo, onDelete, onToggle }) {
  return (
    <li className="todo-item">
      <span className={classNames('todo-item__text', { 'todo-item__text--completed': todo.completed })}>
        {todo.text}
      </span>
      <div className="todo-item__actions">
        <button 
          type="button" 
          className="todo-item__button todo-item__button--delete" 
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
        <button 
          type="button" 
          className="todo-item__button todo-item__button--toggle" 
          onClick={() => onToggle(todo.id)}
        >
          {!todo.completed ? "Done" : "Undo"}
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};