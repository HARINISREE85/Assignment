fetch("https://github.com/HARINISREE85-jpg/Assignment")
  .then(response => response.json())
  .then(data => {
    console.log("GitHub Profile Data:");
    console.log(data);
  })
  .catch(error => console.log("Error:", error));