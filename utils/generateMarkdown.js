var license = {};

function renderLicense(data) {
  if (data.license != 'none') {
    switch (data.license) {
      case 'GNU GPLv3':
        license.link = 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg';
        license.site = 'https://www.gnu.org/licenses/fdl-1.3';        
      case 'Apache License 2.0':
        license.link = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
        license.site = 'https://opensource.org/licenses/Apache-2.0';
      case 'Mozilla Public License 2.0':
        license.link = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
        license.site = 'https://opensource.org/licenses/MPL-2.0';
      case 'MIT':
        license.link = 'https://img.shields.io/badge/License-MIT-yellow.svg';
        license.site = 'https://opensource.org/licenses/MIT';
    }

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicense(data);

  return `# ${data.title}
  
  ![badge](${license.link})<br />

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
  ![badge](${license.link})<br />
  This application is covered by the ${data.license} license. More information can be found at ${license.site}.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  
  Contant me on GitHub - ${data.username}, (http://github.com/${data.username}/)

  or 

  Email me with questions: ${data.email}

  _This README was generated with ❤️ by [readme-generator](https://github.com/texrob20/readme-generator)
`;
}

module.exports = generateMarkdown;