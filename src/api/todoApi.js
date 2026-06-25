let todos = []
let nextId = 1;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const todoApi = {
  async fetchTodos() {
    await delay(1000);
    return [...todos];
  },

  async addTodo(text) {
    const newTodo = { id: nextId++, text, completed: false };
    todos.push(newTodo);
    return { ...newTodo };
  },

  async deleteTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    return { id };
  },

  async toggleTodo(id) {
    let task = todos.find(t=>t.id === id);
    task.completed = !task.completed;
    return { ...task };
  }
};