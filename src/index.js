document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  taskForm.addEventListener("submit", function(event){
    event.preventDefault();

    const taskDescription = event.target.description.value;
  
    const addTask = document.createElement("li");
    addTask.innerHTML = `${taskDescription}`;

    const currentThing = document.getElementById("tasks");
    currentThing.appendChild(addTask);
  
  });

});
