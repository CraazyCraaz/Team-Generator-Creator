const Employee = require("./employee")

// Make classes?
// extends Employee

class Engineer extends Employee {
    constructor(name,id, email, github) {
        super(name,id, email)
        this.github = github
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
}

// function Engineer(name, email, github) {
//     this.name = name;
//     this.id = i++;
//     this.email = email;
//     this.github = github;

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
//         return "Engineer"
//     }
//     this.getGithub = function () {
//         return this.github
//     }
// }

module.exports = Engineer