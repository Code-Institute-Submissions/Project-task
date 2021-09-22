const form = document.getElementById('form');
const inputTask = document.getElementById('task');
const inputTasktype = document.getElementById('task-type');
const inputDate = document.getElementById('target-date');

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

