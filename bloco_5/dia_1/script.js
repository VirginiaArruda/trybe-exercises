let headerContainer = document.getElementById("header-container");
headerContainer.style.background = 'green';

let emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.background = 'brown';

let emergencyTasks2 = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasks2.length; index += 1){
  emergencyTasks2[index].style.background = 'blue';
}

