import { Provider } from 'react-redux';
import store from './store';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app__container">
        <h1 className="app__title">ToDo List</h1>
        <AddTodoForm/>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;