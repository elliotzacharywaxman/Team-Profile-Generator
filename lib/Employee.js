class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
  
    getName() {
      console.log(`The employee's name is: ${this.name}`);
    }
    getId() {
        console.log(`The employee's id is: ${this.id}`);
    }
    getEmail() {
        console.log(`The employee's email is: ${this.email}`);
    }
    getRole() {
        console.log(`The employee's is an employee}`);
        return "Employee"
    }
  }
module.exports = Employee