const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const employeeArr = [];
let blankPage = "";


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
    ]).then(response => {
        const newManager = new Manager(response.nameManager, response.idManager, response.emailManager, response.phoneManager)
        employeeArr.push(newManager)
        addToPage();
        newEmployeePrompt();
    })
}

const newEmployeePrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "Add a new member or quit and create page:",
            name: 'employeeChoice',
            choices: ['engineer', 'intern', 'Quit']
        }
    ]).then(response => {
        switch (response.employeeChoice) {
            case 'engineer':
                engineerPrompt();
                break;
            case 'intern':
                internPrompt();
                break
            default:
                generatePage();
        }
    })
}

const engineerPrompt = () => {
    inquirer.prompt([
        {
            name: 'nameEngineer',
            type: 'input',
            message: "What is your engineer's name?"
        },
        {
            name: "idEngineer",
            type: "input",
            message: "What is your engineer's ID number?"
        },
        {
            name: "emailEngineer",
            type: "input",
            message: "What is your engineer's email address?"
        },
        {
            name: "githubEngineer",
            type: "input",
            message: "What is your engineer's GitHub username?"
        }
    ]).then(response => {
        const newEngineer = new Engineer(response.nameEngineer, response.idEngineer, response.emailEngineer, response.githubEngineer)
        employeeArr.push(newEngineer)
        addToPage();
        newEmployeePrompt();
    })
}

const internPrompt = () => {
    inquirer.prompt([
        {
            name: 'nameIntern',
            type: 'input',
            message: "What is your intern's name?"
        },
        {
            name: "idIntern",
            type: "input",
            message: "What is your intern's ID number?"
        },
        {
            name: "emailIntern",
            type: "input",
            message: "What is your intern's email address?"
        },
        {
            name: "githubIntern",
            type: "input",
            message: "What school did your intern graduate from?"
        }
    ]).then(response => {
        const newIntern = new Intern(response.nameIntern, response.idIntern, response.emailIntern, response.githubIntern)
        employeeArr.push(newIntern)
        addToPage();
        newEmployeePrompt();
    })
}

function addToPage(element) {
    employeeArr.forEach(element => {
        if (element.getRole() === "manager") {
            blankPage += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${element.name}: Manager</h5>
            <h6 class="card-text">ID: ${element.id}</h6>
            <h6 class="card-text">Email: ${element.email}</h6>
            <h6 class="card-text">Office Phone Number: ${element.phone}</h6>
        </div>
        </div>`
        } else if (element.getRole() === "engineer") {
            blankPage += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${element.name}: Engineer</h5>
            <h6 class="card-text">ID: ${element.id}</h6>
            <h6 class="card-text">Email: ${element.email}</h6>
            <h6 class="card-text">Graduated from: ${element.school}</h6>
        </div>
        </div>`
        } else if (element.getRole() === "intern") {
            blankPage += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${element.name}: Intern</h5>
            <h6 class="card-text">ID: ${element.id}</h6>
            <h6 class="card-text">Email: ${element.email}</h6>
            <h6 class="card-text">GitHub username: ${element.github}</h6>
        </div>
        </div>`
        }
    })
}

function generatePage() {
    console.log(employeeArr)
    const starterHtml = `<!DOCTYPE html>
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
            <h1 id="title">My Team</h1>
            ${blankPage}
            </body>
            </html>`;

    fs.writeFileSync('./dist/index.html', starterHtml, function (error) {
        if (error) throw error
    });
}

managerPrompt()