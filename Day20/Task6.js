//Write a function that takes marks and returns the grade (A, B, C).
function getGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else {
    return "C";
  }
}
console.log(getGrade(95)); // Output: A
console.log(getGrade(80)); // Output: B
console.log(getGrade(60)); // Output: C

