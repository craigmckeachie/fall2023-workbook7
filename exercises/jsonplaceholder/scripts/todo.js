"use strict";

//get html elements
const toDoIdTextbox = document.querySelector("#toDoIdTextbox");
const displayButton = document.querySelector("#displayButton");
const messageDiv = document.querySelector("#messageDiv");


//functions
function displayToDo() {
  const toDoId = toDoIdTextbox.value;

  fetch("https://jsonplaceholder.typicode.com/todos/" + toDoId)
    .then((response) => response.json())
    .then((todo) => {
      messageDiv.innerText = `
        Title: ${todo.title}
        Completed: ${todo.completed} 
      `;
    });
}

//wire-up
displayButton.onclick = displayToDo;
