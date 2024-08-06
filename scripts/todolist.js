const todolist = [{
  name:'Wash car',
  dueDate:'22-12-2022'
  }, {
  name: 'Make dinner',
  dueDate: '01-01-2024'
  }];

renderTodolist();

document.querySelector('.js-date-input')
  .addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
})

const buttonElement = document.querySelector('.js-button');

buttonElement.addEventListener('click', () => {
  addTodo();
})

function renderTodolist() {
  let htmlElement = '';

  todolist.forEach((todoObj, index) => {
    const { name, dueDate } = todoObj;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="js-delete-button" id="delete-button">Delete</button>
    `;
    htmlElement += html;

  })
  /*
  for (let i = 0; i < todolist.length; i++) {
    const todoObj = todolist[i];
    const { name, dueDate } = todoObj;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button id="delete-button" onclick="
      todolist.splice(${i}, 1);
      renderTodolist();
    ">Delete</button>
    `;
    htmlElement += html;
  }
  */
  document.querySelector('.js-display')
    .innerHTML = htmlElement;

  document.querySelectorAll('.js-delete-button')
  .forEach((deletebtn, index) => {
    deletebtn.addEventListener('click', () => {
      todolist.splice(index, 1);
      renderTodolist();
    })
  })
}
function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  todolist.push({
    name,
    dueDate
  });
  //console.log(todolist);
  inputElement.value = '';
  renderTodolist();
}