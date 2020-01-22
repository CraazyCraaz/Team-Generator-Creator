const Employee = require("./employee")

class Manager extends Employee {
    constructor(name,id, email, officeNumber) {
        super(name,id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

// function Manager(name, id, email, officeNumber) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.officeNumber = officeNumber;

//     this.getName = function () {
//         return this.name
//     }
//     this.getId = function () {
//         return this.id
//     }
//     this.getEmail = function () {
//         return this.email
//     }
//     this.getRole = function () {
//         return "Manager"
//     }
//     this.getOfficeNumber = function () {
//         return this.officeNumber
//     }
// }

module.exports = Manager;