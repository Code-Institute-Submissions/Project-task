const form = document.getElementById('form');
const inputTask = document.getElementById('task');
const inputTasktype = document.getElementById('task-type');
const inputDate = document.getElementById('target-date');
const formSection = document.querySelector('.form-selection');
const addbutton = document.getElementById('add-button')
console.log(addbutton);

function showError(input, message) {
    const formSection = input.parentElement;
    formSection.className = 'form-section error';
    const small = formSection.querySelector('small');
    small.innerText = message;
    document.getElementByClassName('.fas fa-check').classList.remove('.fas fa-check');

 }   

  // Show success outline
function showSuccess(input) {
    const formSection = input.parentElement;
    formSection.className = 'form-section success';
  }

// inputtaask


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

//Add tasks to the table

//Loading listeners

// loadEventListeners();

// function loadEventListeners(){
//     addbutton.addEventListener('click', addTask);
// }

//Add task

document.getElementById("myBtn").addEventListener('click', addTask); 

function addTask(e){
        
    if(inputTask.value === ''){
        alert('Add a task');
    } else if (inputDate.value === ''){
        alert('Add a date');
    } 
    e.preventDefault();
}





// function Add a new task() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }
  

