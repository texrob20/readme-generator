// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge.license-${data.license}-brightgreen)<br />

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  This application is covered by the ${data.license} license. 

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  
  Find me on GitHub - ${data.username}, (http://github.com/${data.username}/)

  Email me with questions: ${data.email}

  _This README was generated with ❤️ by [readme-generator](https://github.com/texrob20/readme-generator)
`;
}

module.exports = generateMarkdown;