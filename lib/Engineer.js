const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        super(name,id,email);
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return "Engineer"
    }
}

module.exports = Engineer


