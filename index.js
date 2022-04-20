const inquirer = require("inquirer");
const fs = require('fs');
const { type } = require("express/lib/response");
const generateEngineer = require("./src/src")
const generateIntern = require("./src/src")
const generateManager = require("./src/src")
const starterHtml = require("./src/src")

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
                return
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
                writeFile()
            }
        })
}

const writeFile = () => {
    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    )
}

managerPrompt()
// .then(employeePrompt())
// .then(writeFile()) 