// Function to get the existing to-do list from local storage
export function getTodos() {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
}

// Function to add a new to-do item and store it in local storage
export function addTodo(todo) {
  let todos = getTodos();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to remove a to-do item by index

// Function to clear all to-do items
export function clearStorage(key) {
  localStorage.removeItem(key);
}
