function get_todos() {
  //this creates an array of task that are inputed
  let todos = new Array;
  // this pulls the task that was saved in the web browser memory
  let todos_str = localStorage.getItem('todo');
  // if the input is not null then JSON.parse will communicate with the web browser to make the task a JS object
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

// this function adds the inputed task to the get_todos function array
function add() {
  // this takes the inputed task and creates a variable of it
  let task = document.getElementById('task').value;

  let todos = get_todos();
  // this adds a new task to the end of the array
  todos.push(task);
  // this converts the task input to a JSON string
  localStorage.setItem('todo', JSON.stringify(todos));
  document.getElementById('task').value = '';
  show();

  return false;
}

// this function keeps the tasks permanently displayed on the screen
function show() {
  // this sets the task that was retrieved as a variable
  let todos = get_todos();

  // this sets up each task s an unordered list
  let html = '<ul>';
  // this displays a task to the list in the order that it is inputed
  for (let i = 0; i < todos.length; i++) {
    //this also displays the task as a list and creates the button with the "x"
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
  };
  html += '</ul>';
  // this displays th task as a list
  document.getElementById('todos').innerHTML = html;

  // this tells the browser how to display the todo array after an item has been removed
  let buttons = document.getElementsByClassName('remove');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  }
}

// this function for removing item from the list
function remove() {
  let id = this.getAttribute('id');
  let todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));
  // this looks in the show() how to display a removed item on the screen
  show();

  return false;
}

// this displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// this will keep the inputs displayed permanently on the screen
show();

// DISPLAYING TODAY DATE //
let date = document.getElementById("date");
let todayDate = new Date().getDate();
let month = new Date().getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let year = new Date().getFullYear()
date.innerHTML = months[month] + " " + todayDate +  ", " + year ;