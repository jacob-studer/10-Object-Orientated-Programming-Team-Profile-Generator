//This is where the questions go 
const inquirer = require("inquirer");
const fs = require('fs');
const generateHtml = require()

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the Managers name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the Managers ID Number?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the Managers Email?',
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'What is the Managers Office Number?',
        },
    ])
}

const init = () => {
    promptUser()
    
    .then((response) => {
        writeToFile(response);
    });  
    };

const writeToFile = (response) => {
    fs.writeFile('index.html', generateHtml(response), (err) =>
        err ? console.error(err) : console.log('Success!'))
}
    
    
init();

module.exports = promptUser;


//look into validation