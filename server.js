//Constructor 
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");

//Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Renders input data to index.html and displays team cards in browser
const OUTPUT_DIR = path.resolve(__dirname, "templates");
const outputPath = path.join(OUTPUT_DIR, "index.html");

let render = require("./lib/htmlRenderer");
let teamList = []

// Inputs to take in team members information
var employeeQuestions = [
    {
        type: "input",
        message: "Enter employee name: ",
        name: "name",
    },
    {
        type: "input",
        message: "Enter employee email: ",
        name: "email",
    },
]

var managerQuestions = [
    {
        type: "input",
        message: "Enter employee office number: ",
        name: "officeNumber",
    }
]

var engineerQuestions = [
    {
        type: "input",
        message: "Enter employee github username: ",
        name: "github",
    }
]

var internQuestions = [
    {
        type: "input",
        message: "Enter name of employee school: ",
        name: "school",
    }
]


function addEmployee(role){
    if (role == "Manager"){
        let questions = []
        for (each of employeeQuestions){
            questions.push(each)
        }
        for (each of managerQuestions){
            questions.push(each)
        }
        inquirer.prompt(questions).then((response) => {
            let id = teamList.length;
            let manager = new Manager(id, response.name, response.email, response.officeNumber);
            teamList.push(manager);
            init();
        });
    } else if (role == "Engineer"){
        let questions = []
        for (each of employeeQuestions){
            questions.push(each)
        }
        for (each of engineerQuestions){
            questions.push(each)
        }
        inquirer.prompt(questions).then((response) => {
            let id = teamList.length;
            let engineer = new Engineer(id, response.name, response.email, response.github);
            teamList.push(engineer);
            init();
        });
    } else if (role == "Intern"){
        let questions = []
        for (each of employeeQuestions){
            questions.push(each)
        }
        for (each of internQuestions){
            questions.push(each)
        }
        inquirer.prompt(questions).then((response) => {
            let id = teamList.length;
            let intern = new Intern(id, response.name, response.email, response.school);
            teamList.push(intern);
            init();
        });
    };
};


function init(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add a team member?",
            name: "boolTeamMember",
            choices: ["Yes", "No"]
        }
    ]).then((response) => {
        if (response.boolTeamMember == "Yes"){
            inquirer.prompt([
                {
                    type: "list",
                    message: "What is the role of the team member?",
                    name: "memberRole",
                    choices: ["Manager", "Engineer", "Intern"]
                }
            ]).then((response) => { 
                addEmployee(response.memberRole)
            });
         } else {
            const renderTeam = render(teamList);
            fs.writeFile(outputPath, renderTeam, "utf8", function(err){
                if (err) {
                    return console.log(err);
                } else {
                    console.log(`File rendered to ${outputPath}`)
                    };
                });
            };
    });
};

init()