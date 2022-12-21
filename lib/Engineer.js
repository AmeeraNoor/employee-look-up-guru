const Employee = require('./Employee');

class Enginerr extends Employee {
    constructor(name, id, email, GithubUsername) {

        super(name, id, email);

        this.githubUsername = githubUsername;
    }

    getGithub() {
        return this.githubUsername;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;