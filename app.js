const tasklistdata = [];  //that will hold all the value of task list
const inputTask = document.getElementById('task'); //first input field 
const inputTeammember = document.getElementById('team-member'); //2nd input field
const inputDate = document.getElementById('target-date'); //3rd input field which is that target date for the task
const taskList = document.querySelector('.task-list');// tasks will be appended inside the tasklist table
const taskButton = document.getElementById('addtaskbtn');  // button that will add task record to the task list
const cleartasks = document.getElementById('cleartasksbtn'); //button that will delete all task deleted
const taskclass = document.getElementById('form-section');

console.log(taskclass);
//function to show error and add red border when no information is inputted into field

function showError(input, message) {
    const formSection = input.parentElement;
    formSection.className = 'form-section error';
    const small = formSection.querySelector('small');
    small.innerText = message;
 }   

// function to show success that add classname success which add a greenborder and a tick
function showSuccess(input) {
    const formSection = input.parentElement;
    formSection.className = 'form-section success';
  }

// Event Listeners that intialise error or success functions when user moves away task field
inputTask.addEventListener("blur", function(e) {
    if (inputTask.value === ''){
    showError(inputTask,  'task is required');

}else {
    showSuccess(inputTask);
}
 });

 // Event Listeners that intialise error or success functions when user moves away team member field
 inputTeammember.addEventListener("blur", function(e) {
    if (inputTeammember.value === ''){
    showError(inputTeammember,  'team member is required');
}else {
    showSuccess(inputTeammember);
}
 });

 // Event Listeners that intialise error or success functions when user moves away from data input field

inputDate.addEventListener("blur", function(e) {
    if (inputDate.value === ''){
    showError(inputDate,  'date is required');
}else {
    showSuccess(inputDate);
}
 });

// add an eventListener on form, and listen to the add task event
taskButton.addEventListener('click', function(e) {
  // stops the page from reloading when submitting the form
  e.preventDefault();
  addTask(inputTask.value, inputTeammember.value, inputDate.value);
   // call addTask function with add results from 3 fields
});

// function to addtask
function addTask(item, teammember, target) {
  // if fields are not empty
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
    
    // then add it to task array
    tasklistdata.push(taskitem);
    
 rendertasklist(tasklistdata); // then renders them to the row in the table

   // finally clear the input box value as well as make add focus to the first field
    inputTask.value = '';
    inputDate.value = '';
    inputTeammember.value = '';
    inputTask.focus();
    taskclass.classList.remove("success");
    //removeClasses();

   
  
  }
else {swal("Whoops" ,  "Please complete all fields in the form!" ,  "error" );
}
}

// function to add given tasks to table
function rendertasklist(tasklistdata) {
  // clear everything inside table list
  taskList.innerHTML = '';

  // run through each item inside tasklist and add a new row
  tasklistdata.forEach(function(item, teammember, target) {
    const tr= document.createElement('tr');
      tr.innerHTML =
      
      `<td><label><input type="checkbox" id="taskcheckbox" onclick="markComplete();"></label></td>
      <td>${item.createdate}</td>
      <td>${item.name}</td>
      <td>${item.member}</td>
      <td>${item.date}</td>
      
      <td><button type="button" class ="btn btn-danger btn-sm float-end">X</button></td>
      
    `;
    // finally add the row to the end of the table
    taskList.append(tr);
    // const checkbox = document.getElementById('taskcheckbox')
    // console.log(taskcheckbox);

  });
}

//remove tasks listener on button click
taskList.addEventListener('click', removeTask);

//clear all tasks listener on button click
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

function markComplete(){
const checkBox = document.getElementById('taskcheckbox');
console.log(checkBox);
  if (checkBox.checked == true){
    console.log("this is great")
   } else {
     console.log("no line through");
  }


}



function removeClasses() {
  for (var i = 0; i < els.length; i++) {
    taskclass[i].classList.remove('success')
  }
}
