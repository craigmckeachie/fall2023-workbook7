fetch("http://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.status);
    return response.json(); //must have return if function is more than one line
  })
  .then((user) => {
    console.log(user.name);
    console.log(user.email);
    console.log(user.website);
  });
