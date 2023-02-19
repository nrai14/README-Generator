// function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.title}

## Description

${data.description}

## Table of Contents 

* [Description](#description)
* [Installation] (#installation)
* [Usage] (#usage)
* [License] (#license) ${generateBadge(data.license)}
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] (#questions) 


## Installation

${data.installation}

## Usage

${data.usage}

## License

The application is covered under the ${data.license} license.


## Contributing

${data.contributing}


## Tests

${data.tests}


## Questions 

If you have any questions, please feel free to reach out:
* GitHub username: ${data.github} (https://github.com/${data.github})  
* Email address: ${data.email}

  

`

function generateBadge(license) {
  if (license === 'MIT') {
    return "[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license === 'ISC') {
    return "[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
}
  else {
    return "[![Apache License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
}

}
module.exports = generateMarkdown;
