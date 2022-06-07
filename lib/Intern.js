const Employee = require("./Employee");

class Manager extends Employee {
    constructor(school) {
        this.school = school;
        super(name,id,email);
    }
    getRole(){
        return "Intern"
    }
}

module.exports = Manager