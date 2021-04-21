const inquirer = require("inquirer");

class Manager {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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

// getId() {
    
// }

// getEmail() {
    
// }

// officeNumber() {
    
// }

// getRole() {
//     return Manager
// }

// const manager = new Manager(${getName}, ${getId}, ${getEmail})