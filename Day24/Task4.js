//Wrap a piece of code inside try...catch and log the error.
try {
  // Code that might throw an error
  let result = someUndefinedFunction(); 
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}