// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.title = "Engineer";
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;