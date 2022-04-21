const inquirer = require("inquirer");
const fs = require('fs');
const { type } = require("express/lib/response");
// const generateEngineer = require("./src/src")
// const generateIntern = require("./src/src")
// const generateManager = require("./src/src")
// const starterHtml = require("./src/src")

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?"
        },
        {
            name: 'id',
            type: 'input',
            message: "What is your manager's ID number?"
        },
        {
            name: 'email',
            type: 'input',
            message: "What is your manager's email address?"
        },
        {
            name: 'phone',
            type: 'input',
            message: "What is your manager's office phone number?"
        },
        {
            name: "add",
            type: "list",
            message: "Would you like to add more employees?",
            choices: ["yes", "no"]
        }
    ])
        .then(function (answers) {
            if (answers.add === "yes") {
                employeePrompt()
            } else {
                starterHtml()
                    .then((answers) => {
                        const managerContent = generateManager(answers);
                        fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                            err ? console.log(err) : console.log('Successfully created README.md!')
                        )
                    })
            }
        })
}



const employeePrompt = (answer) => {
    inquirer.prompt([
        {
            name: "job",
            message: "Pick your next employee or finish your team",
            type: "list",
            choices: ['engineer', 'intern']
        },
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
        .then(function (answers) {
            if (answers.add === "yes") {
                employeePrompt()
            } else {
                starterHtml()
                    .then((answers) => {
                        const managerContent = generateManager(answers);
                        fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                            err ? console.log(err) : console.log('Successfully created README.md!')
                        )
                    })
            }
        })
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