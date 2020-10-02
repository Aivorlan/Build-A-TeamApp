// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, role, githubuname, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.githubuname = githubuname;
        this.school = school;
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail(){
        return this.email;
    }
    getRole() {
        return this.role;
    }
    getGhusername() {
        return this.githubuname;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Employee;