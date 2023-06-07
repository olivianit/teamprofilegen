const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/template");
const {managerQuestions, engineerQuestions, internQuestions} = require('./questions');

const team = [];



const addEmployee = [
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add an employee?",
        choices: ["Engineer", "Intern", "No"]
    }
];

const init = () => {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        team.push(manager);
        addEmployees();
    });
}
