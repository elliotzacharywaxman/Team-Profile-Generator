const inquirer = require("inquirer");
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
            write(HTML)
            console.log(`the new employee has the following stats:\nName: ${name}\nID: ${id}\nEmail: ${email}`)
          }
        });
    });
  };


// Function that generates a new card
const addCard = (teamMate) => {
  return  `
  <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${teamMate.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ROLE: ${teamMate.getRole()}</li>
      <li class="list-group-item">Employee ID: ${teamMate.id}</li>
      <li class="list-group-item">Other Info: ${teamMate.specific}</li>
    </ul>
  </div>`
};


// function that generates the html and saves it to "HTML"
const HTML = (employees) => {
  return`
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
      <title>Hello, world!</title>
    </head>
    <body>
      <div class="jumbotron">
          <h1 class="display-4">Our Team</h1>
          <p class="lead">Congratulations on creating a team page. To remove this text, purchase the premium subscription.</p>
          <hr class="my-4">
          <p>Below are the profiles for each of our team members</p>
        </div>
        <flex class ="row">
        ${renderCards(employees)}
        </flex>
        <!-- Optional JavaScript; choose one of the two! -->
        <script type="text/JavaScript" src = "./index.js"></script>
        <!-- <script type="module" src = "./index.js"></script> -->
        <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
      </body>
    </html>
        `
}

// function that renders new cards and returns a string an array of html cards
const renderCards = employees => {
  newCards =[];
  employees.forEach(teamMate => {
    newCards.push(addCard(teamMate));
  });
  console.log(newCards)
  return newCards.join("") 
}

// Function that writes the file after getting all of the User inputs
const write = () => {
  fs.writeFile("./dist/index.html",HTML(employees), function(err,HTML){
    if (err) console.log('error',err);
  })
}
// Initialization Function
init()