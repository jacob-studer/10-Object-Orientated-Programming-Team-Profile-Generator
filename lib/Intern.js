const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school) {
        super(Employee.id, Employee.name, Employee.email);
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
