const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHtml = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate, done } = todoObject;

    const html = `
      <div class="todo-item ${done ? 'completed' : ''}">
        <input type="checkbox" class="checkbox" ${done ? 'checked' : ''} onchange="toggleDone(${index})">
        <span class="todo-text">${name}</span>
      </div>
      <div class="todo-date">${dueDate}</div>
      <button onclick="deleteTodo(${index})" class="delete-todo-button">Delete</button>
    `;
    todoListHtml += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-input-date');

  const name = inputElement.value.trim();
  const dueDate = dateInputElement.value;

  if (name === '') return;

  todoList.push({ name, dueDate, done: false });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function toggleDone(index) {
  todoList[index].done = !todoList[index].done;
  renderTodoList();
}
