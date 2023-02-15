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
      choices: ["MIT", "ISC", "zLib", "Apache"]
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


// let content = answers.title


/* Has to include:

- Title
- Description 


- Table of Contents
- Installation
- Usage
- License (list of options then badge for license is added near the top of the READMe and a notice is added to the section of the README entitled license that explains which license the applicaiton is covered under)
- When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
- When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
- When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

*/

// if statement function for basdge