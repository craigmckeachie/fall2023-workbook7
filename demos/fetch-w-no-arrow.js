fetch("https://jsonplaceholder.typicode.com/users")
  .then(function parseJSON(response) {
    return response.json();
  })
  .then(function logData(data) {
    console.log(data);
  });
