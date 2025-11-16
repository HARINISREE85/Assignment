// Convert a callback-based function into a Promise.
function doTaskPromise() {
  console.log("Task started...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Task completed successfully!");
      } else {
        reject("Task failed!");
      }
    }, 2000);
  });
}
doTaskPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error))
  .finally(() => console.log("Code executed."));