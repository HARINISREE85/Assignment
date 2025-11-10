//Create a function that throws an error when the input number is negative.
function checkNumber(num) {
  if (num < 0) {
    throw new Error("Negative numbers are not allowed!");
  } else {
    console.log("The number is valid:", num);
  }
}
try {
  checkNumber(-5);
} catch (error) {
  console.error("Error:", error.message);
}