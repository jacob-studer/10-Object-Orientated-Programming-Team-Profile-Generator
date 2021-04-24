const inquirer = require("inquirer");
const promptUser = require("../promptUser")

class Manager extends Employee {
    constructor() {
        super(Employee.id, Employee.name, Employee.email);
        this.school;
    }
}

// getName() {
//     const nameQuestion = [{
//         type: 'input',
//         message: 'Managers Name:',
//         name: 'managerName'
//     }];

//     // .then((response => {
//     //     writeToFile(response);
//     // }))
// }

// const manager = new Manager(${getName}, ${getId}, ${getEmail})