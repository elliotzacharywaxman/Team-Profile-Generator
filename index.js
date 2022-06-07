const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// import {Employee, Engineer, Manager, Intern} from "../lib/classes.js"

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is you employee id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    // add logic for if else
    {
      type: 'input',
      message: 'What is your github?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What school are you affiliated with?',
      name: 'school',
    },
  ])
  .then((response) => console.log(response));

const Jason = new Employee()

