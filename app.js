const form = document.getElementById('form');
const inputTask = document.getElementById('task');
const inputTasktype = document.getElementById('task-type');
const inputDate = document.getElementById('target-date');
const formSection = document.querySelector('.form-selection');
const span = document.getElementsByClassName('.fas fa-check');

console.log(span);



// const isuccess = success.innerHTML;
// const element = document.createElement(span);
// const e = document.createElement('i'); 
// e.innerHTML = 'fa fa-tick';
// document.body.appendChild(e);
// var textnode = document.createTextNode('fa fa-tick'); 
// e.appendChild(textnode);




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

//  function myFunction(){
//      const tick = document.createElement('i');
//      var 
//  formSection.append(tick);
//  tick.classList.add("fa","fa-hand-rock-o");
//  }

// function myFunction(){

// var addCheck = document.createElement('i');
// addCheck.classList.add("fas","fa-check");
// console.log(addCheck);

// document.form-selection.appendChild(addCheck);
// }

//myFunction();
// var node = document.createElement("LI");
//   var textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
//change the fa fa icon dependent on success or failure


