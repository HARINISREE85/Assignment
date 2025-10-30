//Use a callback function to display “Task Complete” after another function finishes.
function doTask(callback) {
  console.log("Performing task...");
  setTimeout(() => {
    console.log("Task finished!");
    callback(); // Call the callback function
  }, 2000);
}
// Callback function
function showCompleteMessage() {
  console.log("Task Complete");
}
// Call the main function
doTask(showCompleteMessage);

