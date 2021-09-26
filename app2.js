
// initially get everything from localStorage
getFromLocalStorage();


// const form = document.getElementById('form');
const inputTask = document.getElementById('task');
const inputTasktype = document.getElementById('task-type');
const inputDate = document.getElementById('target-date');
const taskList = document.querySelector('.task-list')
const tasklistdata = [];
const taskButton = document.getElementById('myBtn');
const cleartasks = document.getElementById('clear-tasks')
// const formSection = document.querySelector('.form-selection');

// function to add tasks to local storage
function addToLocalStorage(tasklistdata) {
  // conver the array to string then store it.
  localStorage.setItem('tasklist', JSON.stringify(tasklistdata));
  // render them to screen
  rendertasklist(tasklistdata);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('tasklistdata');
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    taskList = JSON.parse(reference);
    rendertasklist(tasklistdata);
  }
}


// let tasks = [];

// function showError(input, message) {
//     const formSection = input.parentElement;
//     formSection.className = 'form-section error';
//     const small = formSection.querySelector('small');
//     small.innerText = message;
//  }   

//   // Show success outline
// function showSuccess(input) {
//     const formSection = input.parentElement;
//     formSection.className = 'form-section success';
//   }

// // Event Listeners
// inputTask.addEventListener("blur", function(e) {
//     if (inputTask.value === ''){
//     showError(inputTask,  'task is required');

// }else {
//     showSuccess(inputTask);
// }
//  });

// inputTasktype.addEventListener("blur", function(e) {
//     if (inputTasktype.value === ''){
//     showError(inputTasktype,  'type is required');
// }else {
//     showSuccess(inputTasktype);
// }
//  });

// inputDate.addEventListener("blur", function(e) {
//     if (inputDate.value === ''){
//     showError(inputDate,  'date is required');
// }else {
//     showSuccess(inputDate);
// }
//  });


// //Add task

// document.getElementById("myBtn").addEventListener('click', addTask); 

// function addTask(e){
       
//     if(inputTask.value === ''){
//         //improve alert message by using Sweet alert framework
//         swal("Whoops" ,  "Please add a task!" ,  "error" );
//     } else if (inputDate.value === ''){
//         alert('Add a date');
//     }
//     e.preventDefault(); 
//          //create li element
//     const li = document.createElement('li')

//     var node = document.createElement("li");                 // Create a <li> node
//     var textnode = document.createTextNode(inputTask.value);         // Create a text node
//     node.appendChild(textnode);                              // Append the text to <li>
//     document.getElementById('task-list').appendChild(node);     // Append <li> to <ul> with id="myList"
//     inputTask.value = '';

// //    e.preventDefault();
// //    console.log(li);
// }

// window.onload = loadTasks;

// function loadTasks() {
//   // Get the tasks from localStorage and convert it to an array
//   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
// }



// add an eventListener on form, and listen for submit event
taskButton.addEventListener('click', function(e) {
  // prevent the page from reloading when submitting the form
  e.preventDefault();
  addTask(inputTask.value, inputTasktype.value, inputDate.value);
   // call addTodo function with input box current value
});

// function to add todo
function addTask(item, tasktype, target) {
  // if item is not empty
  if (item !== '') {
    // make a todo object, which has id, name, and completed properties
    const taskitem = {
      id: Date.now(),
      name: item,
      type: tasktype,
      date: target,
      completed: false
    };
    

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
}

// function to render given todos to screen
function rendertasklist(tasklistdata) {
  // clear everything inside <ul> with class=todo-items
  taskList.innerHTML = '';

  // run through each item inside tasklist
  tasklistdata.forEach(function(item, tasktype, target) {
    // check if the item is completed
    const checked = item.completed ? 'checked': null;
    // make a <li> element and fill it
    // <li> </li>
    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'item');
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute('data-key', item.id);
    /* <li class="item" data-key="20200708"> 
          <input type="checkbox" class="checkbox">
          Go to Gym
          <button class="delete-button">X</button>
        </li> */
    // if item is completed, then add a class to <li> called 'checked', which will add line-through style
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name},
      ${item.type},
      ${item.date}
      <button class="delete-button">X</button>
    `;
    // finally add the <li> to the <ul>
    taskList.append(li);
  });

}

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

