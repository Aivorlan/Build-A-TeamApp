// Defines and exports the Manager class. 
// inherited from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(id, name, email, officeNumber){
        super(id, name, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager'
    }
}
module.exports = Manager
