const inquirer = require("inquirer");
const script = require("./script.js")
const fs = require("fs")
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = []
const init = () =>{
  newEmployee();
}
const newEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the employees id?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the employees email?',
        name: 'email',
      },
      {
        type: 'list',
        message: 'What is the employees role?',
        name: 'role',
        choices: ['Manager','Engineer','intern'],
      }
    ])
    .then(({name,id,email,role}) => {
      let specific;
      if (role === "Manager"){
        specific = "office number"
      } else if (role === "Engineer"){
        specific = "github"
      } else if (role === "Intern"){
        specific = "School"
      }

      inquirer
        .prompt([
          {
            type: 'input',
            message: `What is your employees ${specific}?`,
            name: 'specific',
          },
          {
            type: 'confirm',
            message: 'Do you want to add another employee?',
            name: 'proceed',
          },
        ])

        .then(({specific, proceed})=>{
          let teamMate;
          if (role === "Manager"){
            teamMate = new Manager (name, id, email, specific);
          } else if (role === "Engineer"){
            teamMate = new Engineer (name, id, email, specific);
          } else if (role === "Intern"){
            teamMate = new Intern (name, id, email, specific);
          }
          employees.push(teamMate);
          if (proceed === true){
            newEmployee();
          } else {
            console.log(`the new employee has the following stats:\nName${this.name}\nID${this.id}\nEmail${this.email}`)
          }
        });
    });
  };
  // Function that writes the file after getting all of the User inputs


// Initialization Function
  init()