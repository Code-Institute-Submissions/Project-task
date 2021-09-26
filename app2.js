


const inputTask = document.getElementById('task');
const inputTasktype = document.getElementById('task-type');
const inputDate = document.getElementById('target-date');
const taskList = document.querySelector('.task-list')
const tasklistdata = [];
const taskButton = document.getElementById('myBtn');
const cleartasks = document.getElementById('clear-tasks')
const checkbox = document.getElementById('checkbox')

console.log(checkbox);
// function to add tasks to local storage
function addToLocalStorage(tasklistdata) {
  // conver the array to string then store it.
  localStorage.setItem('tasklist', JSON.stringify(tasklistdata));
  // render them to screen
  rendertasklist(tasklistdata);
}



let tasks = [];

function showError(input, message) {
    const formSection = input.parentElement;
    formSection.className = 'form-section error';
    const small = formSection.querySelector('small');
    small.innerText = message;
 }   

  // Show success outline
function showSuccess(input) {
    const formSection = input.parentElement;
    formSection.className = 'form-section success';
  }

// Event Listeners
inputTask.addEventListener("blur", function(e) {
    if (inputTask.value === ''){
    showError(inputTask,  'task is required');

}else {
    showSuccess(inputTask);
}
 });

inputTasktype.addEventListener("blur", function(e) {
    if (inputTasktype.value === ''){
    showError(inputTasktype,  'type is required');
}else {
    showSuccess(inputTasktype);
}
 });

inputDate.addEventListener("blur", function(e) {
    if (inputDate.value === ''){
    showError(inputDate,  'date is required');
}else {
    showSuccess(inputDate);
}
 });





// add an eventListener on form, and listen for submit event
taskButton.addEventListener('click', function(e) {
  // prevent the page from reloading when submitting the form
  e.preventDefault();
  addTask(inputTask.value, inputTasktype.value, inputDate.value);
   // call addTask function with input box current value
});

// function to add todo
function addTask(item, tasktype, target) {
  // if item is not empty
  if (item !== '' && tasktype !== '' && target !== '') {
    // make a todo object, which has id, name, and completed properties
    const taskitem = {
      id: Date.now(),
      name: item,
      type: tasktype,
      date: target,
      completed: false
    }
    // then add it to todos array
    tasklistdata.push(taskitem);
    addToLocalStorage(tasklistdata);
 rendertasklist(tasklistdata); // then renders them between <ul>

   // finally clear the input box value
    inputTask.value = '';
    inputDate.value = '';
    inputTasktype.value = '';
    inputTask.focus();
  }
else {swal("Whoops" ,  "Please complete all fields in the form!" ,  "error" );
}
}

// function to render given tasks to screen
function rendertasklist(tasklistdata) {
  // clear everything inside <ul> with class=todo-items
  taskList.innerHTML = '';

  // run through each item inside tasklist
  tasklistdata.forEach(function(item, tasktype, target) {
    // check if the item is completed
    //const checked = item.completed ? 'checked': null;
    // make a <li> element and fill it
    // <li> </li>
    const li = document.createElement('li');
  
    li.innerHTML = `
      ${item.name},
      ${item.type},
      ${item.date}
      <button class="delete-button">X</button>
    `;
    // finally add the <li> to the <ul>
    taskList.append(li);
  });
}

//remove tasks
taskList.addEventListener('click', removeTask);

//clear all tasks
cleartasks.addEventListener('click', clearTasks);

//remove task

function removeTask(e){
if (e.target.classList.contains('delete-button')){
  if(confirm('are you sure')){
  e.target.parentElement.remove();
}
}
}

function clearTasks(){
  if(confirm('are you sure you want to delete all tasks')){
  taskList.innerHTML = '';
}
}

function completeTask(){
  console.log('Hello');
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);


