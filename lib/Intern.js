// Defines and exports the Intern class.  
// Inherited from Employee.
const Employee = require("./Employee")
class Intern extends Employee {
    constructor(id, name, email, school){
        super(id, name, email)
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return 'Intern'
    }
}
module.exports = Intern