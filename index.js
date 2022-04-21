const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const employeeArr = []


const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'nameManager',
            message: "What is your manager's name?"
        },
        {
            name: 'idManager',
            type: 'input',
            message: "What is your manager's ID number?"
        },
        {
            name: 'emailManager',
            type: 'input',
            message: "What is your manager's email address?"
        },
        {
            name: 'phoneManager',
            type: 'input',
            message: "What is your manager's office phone number?"
        }
    ]).then(response =>{
        const newManager = new Manager (response.nameManager, response. idManager, response.emailManager, response.phoneManager)
        employeeArr.push(newManager)
        newEmployeePrompt()
    })
}

const newEmployeePrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "Add a new member or quit and create page:",
            name: 'employeeChoice',
            choices: ['Engineer', 'Intern', 'Quit']
        }
    ]).then(response => {
        switch (response.employeeChoice) {
            case 'Engineer':
                newEngineer();
                break;
            case 'Intern':
                newIntern();
                break
            default:
                makeHtml()
        }
    })
}

const employeePrompt = (answer) => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: "What is your employee's name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is your employee's ID number?"
        },
        {
            name: "email",
            type: "input",
            message: "What is your employee's email address?"
        },
        {
            name: "github",
            type: "input",
            message: "What is your employee's GitHub username?"
        },
        {
            name: "add",
            type: "list",
            message: "Would you like to add more employees?",
            choices: ["yes", "no"]
        }
    ])
}

const starterHtml = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <h1 id="title">My Team</h1>`
}

const generateManager = ({ name, id, email, phone }) => {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${name}: Manager</h5>
        <h6 class="card-text">ID: ${id}</h6>
        <h6 class="card-text">Email: ${email}</h6>
        <h6 class="card-text">Office Phone Number: ${phone}</h6>
    </div>
    </div>`
}

const generateEngineer = ({ name, id, email, github }) => {
    return `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${name}: Manager</h5>
            <h6 class="card-text">ID: ${id}</h6>
            <h6 class="card-text">Email: ${email}</h6>
            <h6 class="card-text">Office Phone Number: ${github}</h6>
        </div>
        </div>`
}

const generateIntern = ({ name, id, email, school }) => {
    return `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${name}: Manager</h5>
            <h6 class="card-text">ID: ${id}</h6>
            <h6 class="card-text">Email: ${email}</h6>
            <h6 class="card-text">Office Phone Number: ${school}</h6>
        </div>
        </div>`
}

const finisherHtml = () => {
    return `</body>
                </html>`
}

const writeFile = () => {
    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    )
}

managerPrompt()
// .then(employeePrompt())
// .then(writeFile()) 