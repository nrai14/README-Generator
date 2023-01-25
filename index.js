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
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.title);
    // currently returns answer as an object 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
