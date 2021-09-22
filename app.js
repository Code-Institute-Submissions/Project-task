const form = document.getElementById('form');
const inputTask = document.getElementById('task');
const inputTasktype = document.getElementById('task-type');
const inputDate = document.getElementById('target-date');

function showError(input, message) {
    const formControl = input.parentElement;
    formSection.className = 'formSection error';
    const small = formSection.querySelector('small');
    small.innerText = message;
    console.log(message);
  }   

  // Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
//add event listener

//   form.addEventListener('submit', function(e) {
//     e.preventDefault();
// });
