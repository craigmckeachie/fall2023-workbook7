"use strict";

//get the HTML elements
const coursesTableBody = document.getElementById("coursesTableBody");

//write function
function loadTableBody(courses) {
  for (const course of courses) {
    console.log(course.courseName);
    let row = coursesTableBody.insertRow();

    let cell1 = row.insertCell();
    cell1.innerText = course.dept;

    let cell2 = row.insertCell();
    cell2.innerText = course.courseNum;

    let cell3 = row.insertCell();
    cell3.innerText = course.courseName;
  }
}

function initialize() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((courses) => {
      loadTableBody(courses);
    });
}
window.onload = initialize;
