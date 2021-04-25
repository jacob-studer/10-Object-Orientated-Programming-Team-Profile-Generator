//This is where the questions go 
const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHtml = require('./src/template')
const teamMembers = [];


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
            pickEmployee();
        })

        

    }

    const pickEmployee = () => {
        inquirer.prompt ([
            {
                type: 'list',
                name: 'employeeChoice',
                message: 'What type of Employee would you like to add next?',
                choices: ['Intern', 'Engineer', 'None, Im done.'],
            }
        ]) .then(answers => {
            if (answers.employeeChoice === 'Intern') {
                generateIntern();
            } else if (answers.employeeChoice === 'Engineer'){
                generateEngineer();
            } else {
                return generateTeam();
            }
        })
    }

    const generateIntern = () => {
        inquirer.prompt([
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
            pickEmployee();
        })
    }

    const generateEngineer = () => {
        inquirer.prompt([
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
            pickEmployee();
        })
    }

    generateManager();

}

const generateTeam = () => {
    console.log("Generating Team...")
    fs.writeFile('index.html', generateHtml(teamMembers), (err) =>
        err ? console.error(err) : console.log('Success!'))
}

//how to add css?
    
    
promptUser();

// module.exports = promptUser;
//can this not export because its a function?


//look into validation