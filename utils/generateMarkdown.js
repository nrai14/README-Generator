// function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.title}

## Description

${data.description}

## Table of Contents 

* [description](##description)
* [installation] (##installation)
* [usage] (##usage)
* [license] (##license) ${generateBadge(data.license)}
* [contributing] (##contributing)
* [tests] (##tests)
* [questions] (##questions) 


## Installation

${data.installation}

## Usage

${data.usage}

## License

The application is covered under the ${data.license} license.


## Contributing


## Tests


## Questions 





Github handles:
1. [sanjana-1604](https://github.com/sanjana-1604)
2. [sabrina-martorelli](https://github.com/sabrina-martorelli)
3. [nrai14](https://github.com/nrai14) 
4. [lauralp92](https://github.com/lauralp92)



## Deployed Link

*Please add deployed link here*
  
  
  
  ;
}
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
