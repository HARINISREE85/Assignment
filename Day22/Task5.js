// Parent class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}

// Child class
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // Call parent constructor
    this.department = department;
  }

  displayManagerInfo() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`);
  }
}

// Example usage
const manager1 = new Manager("Harini", 50000, "IT");
manager1.displayManagerInfo();