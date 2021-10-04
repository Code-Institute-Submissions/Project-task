# Project-task
Aim and Objective of the Project

The Aim of the app is to create a simple task list with the following functionality:

1) A user of app can add a task and assign a team member and target date.  

2) A user will be able to delete a task

3) A user will be able to clear all tasks

4) A user will only be able to add tasks when all fields have been completed.

5) A user will be able to sort the lists so the latest tasks appears at the top of list.


Specification:

1) Created the UI using Html and CSS

2) Created the following function on the form:

3) Created showError() to display red border and error message if user failed to input into field

4) Created showSuccess() to display green border and tick when user successfully update a field

5) Created an intialise function that activated either the showError() or ShowSuccess() function when user move aways from form

6) Create addTask function that creates taskitem array of all the input values and pushes to the tasklistdata array.  The data from that array is then added to UI into table row format.   The delete button and checkbox is added to each new row added

7) RemoveClasses() that removes the success class from the input divs

7) removeTask() that delete selected task on delete button click

8) clearTask() that removes all tasks on clear task button click

9) completeTask() that toggles between strikethrough css on checkbox click

10) sortbyDate() that sorts table by Target date
