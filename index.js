const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHtml = require('./src/generateHtml');
const inquirer = require("inquirer");
const fs = require('fs');

const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = [];

async function start() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the manager?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the email of the manager?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the id of the manager?",
        },
        {
            type: "input",
            name: "managerPhoneNumber",
            message: "What is the phone number for the manager?",
        },
    ]);

    // console.log(answer);

    const manager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.managerPhoneNumber
    );

    teamMembers.push(manager);

    // console.log(manager);
    await makeEmployee();

    console.log("await ended");
}

async function makeEmployee() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Choose the type of employee you want to make:",
            choices: ["Intern", "Engineer"],
        },
    ]);

    if (answer.employeeType === "Intern") {
        // ask intern questions
        await makeIntern();
    } else if (answer.employeeType === "Engineer") {
        // ask engineer questions
        await makeEngineer();
    }
}

async function makeIntern() {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: "internName",
            message: "What is the name of the intern?"
        },
        {
            type: 'input',
            name: "internId",
            message: "What is the id of the intern?"
        },
        {
            type: 'input',
            name: "internEmail",
            message: "What is the email of the intern?"
        },
        {
            type: 'input',
            name: "internSchool",
            message: "What is the school of the intern?"
        },
    ]);

    const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
    teamMembers.push(intern);
    goAgain();
}

async function makeEngineer() {
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: "engineerName",
            message: "What is the name of the engineer?"
        },
        {
            type: 'input',
            name: "engineerId",
            message: "What is the id of the engineer?"
        },
        {
            type: 'input',
            name: "engineerEmail",
            message: "What is the email of the engineer?"
        },
        {
            type: 'input',
            name: "engineerGithub",
            message: "What is the github username of the engineer?"
        },
    ]);

    const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
    teamMembers.push(engineer);
    goAgain();
}

async function goAgain() {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'quit',
            message: "Would you like to quit?",
            choices: ['Yes', 'No']
        }
    ]);
    if(answer.quit == 'Yes') {
        // make files here
        const html = generateHtml(teamMembers);
        fs.writeFile('./dist_/index.html', html, (err) => {
            if(err) {
                console.log(err)
            }
            console.log("html file written");
        })
    }else {
        makeEmployee();
    }
}

start();