function parseJSON(response) {
  return response.json();
}

function logData(data) {
  console.log(data);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(parseJSON)
  .then(logData);
