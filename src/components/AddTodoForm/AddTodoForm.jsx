import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '@/store/actions/todoActions';

import './AddTodoForm.css';

export default function AddTodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }
    dispatch(addTodoAsync(trimmedText));
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="add-todo-form"
      onSubmit={handleSubmit}
    >
      <div className="add-todo-form__wrapper">
        <input
          type="text"
          className="add-todo-form__input"
          value={text}
          onChange={handleChange}
          placeholder="Enter task here"
        />
        <button type="submit"
          className="add-todo-form__submit-button"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};