//get html element
const usersTableBody = document.getElementById("usersTableBody");

//write function
function loadUsersTable(users) {
  for (const user of users) {
    let row = usersTableBody.insertRow();

    let cell1 = row.insertCell();
    cell1.innerText = user.id;

    let cell2 = row.insertCell();
    cell2.innerText = user.name;

    let cell3 = row.insertCell();
    cell3.innerText = user.username;
  }
}

function initialize() {
  let users = fetch("http://jsonplaceholder.typicode.com/users");

  fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      loadUsersTable(data);
    });
}

window.onload = initialize;
