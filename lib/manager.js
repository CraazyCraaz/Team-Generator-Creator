function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;

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
    this.officeNumber = function () {
        return this.officeNumber
    }
}

module.exports = Manager;