const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, officeNumber) {
        super(Employee.id, Employee.name, Employee.email);
        this.github;
    }

    getGithub() {

    }

    getRole() {
        return 'Engineer'
    }

}





// const Engineer = new Engineer(input, input, input);

