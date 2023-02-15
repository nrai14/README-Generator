// basically import 
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
];

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the application about?"
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your application?"
  },{
        type: "input",
        name: "usage",
        message: "How do you use this application?"
    },{
      type: "list",
      name: "license",
      message: "What license does this application use?",
      choices: ["MIT", "ISC", "Apache"]
  },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let content = generateMarkdown(answers)



    fs.writeFile('./readme.txt', content, err => {
        if (err) {
          console.error(err);
        }
      });

    // currently returns answer as an object 
  })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });

// function to write README file
function writeToFile(fileName, data) {
    // base template - a good looking format (an entire string)
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


