function Engineer(name, id, email, githubUserName) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.githubUserName = githubUserName;

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
    this.githubUserName = function () {
        return this.githubUserName
    }
}

module.exports = Engineer