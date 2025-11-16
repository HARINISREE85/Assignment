//Write a callback that logs “Task Completed” after 3 seconds.
function delayedTask(callback) {
  console.log("Task started...");
  setTimeout(callback, 3000);
}

function taskCompleted() {
  console.log("Task Completed");
}
delayedTask(taskCompleted);
