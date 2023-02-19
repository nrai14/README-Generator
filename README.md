# Professional README Generator

## Overview

A key best practice when creating an open source project on GitHub is to have a high-quality README for the app. I created this app to help a user follow these best practices by allowing them to conveniently input the name of the app, what the app is for, how to use/install it, how to report issues and finally how to make contributions. This application was created using JavaScript, Node js and Inquirer. 

## Usage 

The following are required to use this application:

* Node.js
* Inquirer NPM Package (Version 8.2.5)
* Clone this repository 

You can quickly and easily create a README file by using a command-line application to generate one. 


The application will be invoked by using the following command:

```bash
node index.js
```

You will be prompted to input data in order to generate your personalised README file.

## User Story

* As a developer, I want a README generator so that I can quickly create a professional README for a new project

## Acceptance Criteria

* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description (DONE)
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README



## Credits 

https://www.npmjs.com/ - NPM Package Inquirer 
https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide - Best practice guide for creating high-quality README 

## License

MIT License 

## Contributing

N/A

## Questions

Please contact me: nishadrai14@gmail.com

## Links

* Sample README -
* Demo Video - 