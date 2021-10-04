const taskListdata = [];  //that will hold all the value of task list
const inputTask = document.getElementById('task'); //first input field 
const inputTeammember = document.getElementById('team-member'); //2nd input field
const inputDate = document.getElementById('target-date'); //3rd input field which is that target date for the task
const taskList = document.querySelector('.task-list');// tasks will be appended inside the tasklist table
const taskButton = document.getElementById('addtaskbtn');  // button that will add task record to the task list
const cleartasks = document.getElementById('cleartasksbtn');
const sortbtn = document.getElementById('sortbtn');

//******credits go to Brad Travesy at Vanilla project particularly the form validator project//

//******function to show error and add red border when no information is inputted into field****

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
//*******/ remove success class on form-section class*******************
 
  function removeClasses(formSection) {
  for (var i = 0; i < formSection.length; i++) {
    formSection[i].classList.remove('success')
  }
}
// Event Listeners that intialise error or success functions when user moves away task field
inputTask.addEventListener("blur", function(e) {
    if (inputTask.value === '') {
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

// add an eventListener listen to the add task event
taskButton.addEventListener('click', function(e) {
// stops the page from reloading when submitting the form
  e.preventDefault();
  addTask(inputTask.value, inputTeammember.value, inputDate.value);
// remove success class from div elements
  formSection = document.getElementsByClassName("form-section")
  removeClasses(formSection);
// call addTask function with add results from 3 fields
});

// function to addtask
function addTask(item, teammember, target) {
// if fields are not empty
  if (item !== '' && teammember !== '' && target !== '') {
// make a task object, which has id, name, and completed properties
    const target = new Date(inputDate.value)
    const taskitem = {
      name: item,
      member: teammember,
      date: target.toDateString(),
      raw_date:inputDate.value,    
    }

// then add it to task array
    taskListdata.push(taskitem);
    
    rendertasklist(taskListdata); // then adds them to the row in the table
// finally clear the input box value
    inputTask.value = '';
    inputDate.value = '';
    inputTeammember.value = '';
      }
//nice delete confirm message I got from SWAL framework
    else {swal("Whoops" ,  "Please complete all fields in the form!" ,  "error" );
}
}

// function to add given tasks to table
function rendertasklist(taskListdata) {
  // and clears everything inside table list
  taskList.innerHTML = '';
  // run through each item inside tasklist and add a new row
  taskListdata.forEach(function(item, teammember, target) {
    const tr= document.createElement('tr');
      tr.innerHTML = 
     `<td class = "col-xs-3" style = "display:None">${item.raw_date}</td>  
      <td class ="col-xs-1"><input type="checkbox" style = "margin-left:15%" class ="checkbox" id="taskcheckbox" onclick="completeTask()"</td>
      <td class = "col-xs-7">${item.name}</td>
      <td class = "col-xs-2"style = "padding-left:15%" >${item.member}</td>
      <td class = "col-xs-2">${item.date}
      <button type="button" class ="btn btn-danger btn-sm float-end">X</button></td>
         `;
// finally add the row to the end of the table
    taskList.append(tr);
  });
}

//remove tasks listener on button click
taskList.addEventListener('click', removeTask);

function removeTask(e){
  if (e.target.classList.contains('float-end')){
  value = e.target.parentElement.previousElementSibling.innerText
  console.log(value)
  for (i in taskListdata){
    if (value == taskListdata[i].member){
      console.log("found it")
      taskListdata.splice(i,1)
    }
  }
   e.target.parentElement.parentElement.remove();
  }
}
//*****************toggle between complete and uncomplete strikethrough********************

function completeTask(){
  const checkBox = document.getElementById('taskcheckbox');
  checkBox.parentElement.parentElement.classList.toggle("strikethrough");
}

//*******************/ function to Sort date by Target date*****************
//credit goes to support from Sardar Dawar a software developer and mentor who provided me with the sort functionality below
 function convertDate(d){
  var p = d.split("-")
  return +(p[0]+p[1]+p[2])
}
 sortbtn.addEventListener("click", sortByDate)
 function sortByDate() {
  var tbody = document.querySelector("#tasklist tbody");
// get trs as array for ease of use
  var rows = [].slice.call(tbody.querySelectorAll("tr"));
  rows.sort(function(a,b) {
    return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
  });
   rows.forEach(function(v) {
    tbody.appendChild(v); // note that .appendChild() *moves* elements
  });
}



//***** */ add an eventListener listen to the clear task event*******
cleartasks.addEventListener('click', function(e) {
  if(confirm('are you sure you want to delete all tasks')){
    for(i in taskListdata){
      taskListdata.splice(i)
    }
  taskList.innerHTML = '';
}
});

