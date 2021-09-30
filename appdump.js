function markComplete(input){
    const checkBox = document.getElementById('taskcheckbox');
    
    console.log(checkBox);
      if (input.classList.toggle('strikethrough')) {
        console.log("this is great")
       } else {
         console.log("no line through");
      }
    }
    markComplete();
    
    