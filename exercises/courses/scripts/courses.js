"use strict";

//get the HTML elements
//get table body so we can insert rows for each course
const coursesTableBody = document.getElementById("coursesTableBody");

//takes a courses array
//loops through the array to get each course (one at a time)
//creates a table row and cells and fills in the course data inside the cells
function loadTableBody(courses) {
  //loops through the array to get each course (one at a time)
  for (const course of courses) {
    //creates a table row (tr) for each course and appends or adds the row inside the table body
    let row = coursesTableBody.insertRow();

    //inside the row create a table cell (td)
    //put the course department name inside the table cell
    let cell1 = row.insertCell();
    cell1.innerText = course.dept;

    //inside the row create a table cell (td)
    //put the course number inside the table cell
    let cell2 = row.insertCell();
    cell2.innerText = course.courseNum;

    //inside the row create a table cell (td)
    //put the course name inside the table cell
    let cell3 = row.insertCell();
    cell3.innerText = course.courseName;
  }
}

//what to do initially after the web page loads all the html
function initialize() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((courses) => {
      loadTableBody(courses);
    });
}

//wiring up or telling the web page to call the initialize function after the html has been loaded
window.onload = initialize;



 

