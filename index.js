//This is where the questions go 
const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');
const generateHtml = require('./src/template')
const teamMembers = [];
// const path = require('path');


const promptUser = () => {

//where to put inquirer?

    const generateManager = () => {
        console.log('Welcome To Team Builder Pro. Please start with your Manager details.')

        inquirer.prompt([
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
        ]) .then(answers => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNum,
            )
            teamMembers.push(manager); 
            //function to do something with teamMembers array?
        })

        // pickEmployee();

    }

    const pickEmployee = () => {

        // if (teamMembers.length === 5){
        //     return console.log('Max amount of team members added.')
        // };

        //how to add a yes or no choice before this asking if they want to add another employee

        prompt ([
            {
                type: 'input',
                name: 'employeeChoice',
                message: 'What type of Employee would you like to add next?',
            }
        ]) .then(answers => {
            if (answers.employeeChoice === 'Intern') {
                generateIntern();
            } else if (answers.employeeChoice === 'Engineer'){
                generateEngineer();
            } else {
                console.log('Please enter a valid Employee type.')
            }
        })
    }

    const generateIntern = () => {
        prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the Interns name?',
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the Interns ID Number?',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the Interns Email?',
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What School did the Intern go to?',
            },
        ]) .then(answers => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool,
            )
            teamMembers.push(intern);   
        })
    }

    const generateEngineer = () => {
        prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the Engineers name?',
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the Engineers ID Number?',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the Engineers Email?',
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the Engineers Github account?',
            },
        ]) .then(answers => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub,
            )
            teamMembers.push(engineer);
        })
    }

    generateManager();

}

const writeToFile = () => {
    console.log("Generating Team...")
    fs.writeFile('index.html', generateHtml(response), (err) =>
        err ? console.error(err) : console.log('Success!'))
}
    
    
promptUser();

// module.exports = promptUser;
//can this not export because its a function?


//look into validation