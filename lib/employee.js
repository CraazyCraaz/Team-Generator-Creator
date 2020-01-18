//OBJECT
//object consists of properties and methods
//properties are variables in the object
//methods are functions in an object
//REFACTOR
//refactor: simplify and have less lines of code, makes it more efficient
//FUNCTION
// purpose of function is reusability
//CONSTRUCTOR
//Function to reuse objects
// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole()

// var phil = { name: "phil", title: "tutor" }

// var jenny = { name: "jenny" }

// var bob = { name: "bob" }

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = function () {
        return this.name
    }
    this.getId = function () {
        return this.id
    }
    this.getEmail = function () {
        return this.email
    }
    this.getRole = function () {
        return "Employee"
    }

}

module.exports = Employee;