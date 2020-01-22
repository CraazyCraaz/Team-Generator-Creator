const Employee = require("./employee")

class Intern extends Employee {
    constructor(name,id, email, school) {
        super(name,id, email)
        this.school = school
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school
    }
}

// function Intern(name, id, email, school) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.school = school;

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
//         return "Intern"
//     }
//     this.getSchool = function () {
//         return this.school
//     }
// }
module.exports = Intern;