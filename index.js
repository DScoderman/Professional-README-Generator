
// inquirer package!
const inquirer = require("inquirer")
const fs =require('fs')

const generateMarkdown = require("./generateMarkdown")

// questions for helping to make the README
const questions = [
    {
    type: "input:",
    message: "What was your project name?",
    name: "project",
    },
{
    type: "input:",
    message: "What was your motivation for this project?",
    name: "reason",
},
{
    type: "input:",
    message: "What are you trying to solve?",
    name: "solve",
},
{
    type: "input:",
    message: "What is needed to install the project?",
    name: "installation",
},
{
    type: "input:",
    message: "How do you use it?",
    name: "usage",
},
{
    type: "input:",
    message: "is there anyone you would like to credit?",
    name: "credit",
},
{
    type: "list",
    message: "What license did you use?",
    name: "license",
    choices: [ 'N/A', 'MIT', 'GNU' ]
},
];


// this is the function to initalize the app!
function init() {
inquirer
.prompt(questions)
.then((data) => {
const READFINAL = generateMarkdown(data)
    fs.writeFile('./readmeoutputs/readme.md', READFINAL, (err) =>
      err ? console.log(err) : console.log('README generated!')
    );
  });
    


}

// Function call to initialize app
init();
