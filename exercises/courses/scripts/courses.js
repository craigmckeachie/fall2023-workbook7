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
    //put the course number inside the table cell
    let cell2 = row.insertCell();
    cell2.innerText = course.courseNum;

    //inside the row create a table cell (td)
    //put the course name inside the table cell
    let cell3 = row.insertCell();
    let anchor = document.createElement("a");
    anchor.href = `details.html?courseid=${course.id}`;
    anchor.text = course.courseName;
    cell3.appendChild(anchor);

    //inside the row create a table cell (td)
    //put the course department name inside the table cell
    let cell1 = row.insertCell();
    cell1.innerText = course.dept;
  }
}

//loading data into memory,
//more specifically taking the json string in the body of the response
// and turning it into a javascript array or a javascript object
function loadItBackIntoMemory(response) {
  return response.json();
}

function displayData(data) {
  loadTableBody(data);
}

// function displayArray(array) {
//   loadTableBody(array);
// }

// function displayObject(object) {
//   console.log(object);
// }

//what to do initially after the web page loads all the html
function initialize() {
  fetch("http://localhost:8081/api/courses")
    //when you receive the response object, call the function in the then..passing it the response object
    .then(loadItBackIntoMemory)
    //when you have the response body turned into data, call the function in the then...passing it the data
    .then(displayData);
}

//wiring up or telling the web page to call the initialize function after the html has been loaded
window.onload = initialize;
