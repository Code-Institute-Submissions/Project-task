// const form = document.getElementById('form');
const inputTask = document.getElementById('task');
const inputTasktype = document.getElementById('task-type');
const inputDate = document.getElementById('target-date');
// const taskList = document.querySelector('.task-list')
// const formSection = document.querySelector('.form-selection');

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


const tasklist = [];
const taskButton = document.getElementById('myBtn');
// add an eventListener on form, and listen for submit event
taskButton.addEventListener('click', function(e) {
  // prevent the page from reloading when submitting the form
  e.preventDefault();
  addTask(inputTask.value, inputTasktype, inputDate.value);
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
      date: target,
      type: tasktype,
      completed: false
    };
    

    // then add it to todos array
    tasklist.push(taskitem);
    console.log(tasklist);
    //rendertasklist(tasklist); // then renders them between <ul>

   // finally clear the input box value
    inputTask.value = '';
    inputDate.value = '';
    inputTasktype.value = '';
  }
}

    