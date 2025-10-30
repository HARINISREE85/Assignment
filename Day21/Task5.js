//Create a callback function that greets a user after getting their name.
function getUserName(callback) {
  let name = "Harini Sree"; 
  callback(name);
}

// Callback function
function greetUser(userName) {
  console.log("Hello, " + userName  );
}

// Call the main function
getUserName(greetUser);
