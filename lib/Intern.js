const Employee = require('./Employee')

class Intern extends Employee {
    constructor(id, school) {
        super(Employee.id, Employee.name, Employee.email);
        this.school;
    }

    getSchool() {

    }

    getRole() {
        return 'Intern';
    }
}

