const inputTask = document.getElementById('task');
const inputTeammember = document.getElementById('team-member');
const inputDate = document.getElementById('target-date');
const taskList = document.querySelector('.task-list');
const tasklistdata = [];
const taskButton = document.getElementById('addtaskbtn');
const cleartasks = document.getElementById('cleartasksbtn');


// Show error message
function showError(input, message) {
    const formInput = input.parentElement;
    document.getElementById('formInput').style.border = "thick solid #e74c3c";
    const small = document.querySelector('small');
    small.style.visibility = 'visible';
     }   

  // Show success outline
function showSuccess(input) {
    // const formSection = input.parentElement;
    // formSection.className = 'form-section success';
    document.getElementById("task").style.border = "thick solid #2ecc71";
    const small = document.querySelector('small');
    small.style.visibility = 'hidden';
  }

// Event Listeners
inputTask.addEventListener("blur", function(e) {
    if (inputTask.value === ''){
    showError(inputTask,  'task is required');

}else {
    showSuccess(inputTask);
}
 });

 inputTeammember.addEventListener("blur", function(e) {
    if (inputTeammember.value === ''){
    showError(inputTeammember,  'team member is required');
}else {
    showSuccess(inputTeammember);
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
  addTask(inputTask.value, inputTeammember.value, inputDate.value);
   // call addTask function with input box current value
});

// function to add todo
function addTask(item, teammember, target) {
  // if item is not empty
  if (item !== '' && teammember !== '' && target !== '') {
    // make a task object, which has id, name, and completed properties
    const today = new Date();
    const target = new Date(inputDate.value)

    const taskitem = {
      createdate: today.toDateString(),
      name: item,
      member: teammember,
      date: target.toDateString()
      
    }
    console.log(inputDate.value);
    // then add it to task array
    tasklistdata.push(taskitem);
    
 rendertasklist(tasklistdata); // then renders them between <ul>

   // finally clear the input box value
    inputTask.value = '';
    inputDate.value = '';
    inputTeammember.value = '';
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
  tasklistdata.forEach(function(item, teammember, target) {
    const tr= document.createElement('tr');
  
    tr.innerHTML =
     `<td>${item.createdate}</td>
      <td>${item.name}</td>
      <td>${item.member}</td>
      <td>${item.date}</td>
      <td><button type="button" class ="btn btn-danger btn-sm float-end">X</button></td>
      
    `;
    // finally add the <li> to the <ul>
    taskList.append(tr);
  });
}

//remove tasks
taskList.addEventListener('click', removeTask);

//clear all tasks
cleartasks.addEventListener('click', clearTasks);

//remove task

function removeTask(e){
if (e.target.classList.contains('float-end')){
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




