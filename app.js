const form = document.getElementById('form');
const inputTask = document.getElementById('task');
const inputTasktype = document.getElementById('task-type');
const inputDate = document.getElementById('target-date');


function changebackgroundcolor(){
    formSection.className = ''
}

changebackgroundcolor();

function showError(input, message) {
    const formSection = input.parentElement;
    formSection.className = 'formSection.error input';
    const small = formSection.querySelector('small');
    small.innerText = message;
 }   

  // Show success outline
function showSuccess(input) {
    const formSection = input.parentElement;
    formSection.className = 'formSection.success input';
  }

// Event Listeners

form.addEventListener('submit', function(e) {
     e.preventDefault();
if (inputTask.value === ''){
    showError(task,  'task is required');
}else {
    showSuccess(task);
}

if (inputTasktype.value === ''){
    showError(task-type,  'task type is required');
}else {
    showSuccess(task-type);
}

if (inputDate.value === ''){
    showError(target-date,  'target date is required');
}else {
    showSuccess(target-date);
}
 });
