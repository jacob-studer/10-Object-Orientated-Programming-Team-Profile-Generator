const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github) {
        super(Employee.id, Employee.name, Employee.email);
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return 'Engineer'
    }

}

module.exports = Engineer;





// const Engineer = new Engineer(input, input, input);

