const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");


const inquirer = require("inquirer");
const fs = require("fs");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const mainHtmlFile = require("./lib/mainHtml");
const util = require("util");
const html = require("./templates/htmltemp");
const path = require("path");

const render = require("./lib/htmlRenderer");



const managerHtmlFile = require("./lib/managerHtml");
const engineerHtmlFile = require("./lib/engineerHtml");
const internHtmlFile = require("./lib/internHtml");

const mainHtmlFile = require("./lib/mainHtml");

const main = async () => {

   
    let employeeHtmlArray = [];
    const managerObj = await getManager();
managerObj.forEach(element => {
        employeeHtmlArray.push(managerHtmlFile.generateHtml(element))
    });
