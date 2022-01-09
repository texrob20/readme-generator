## README Generator
GIVEN a command-line application that accepts user input:

- WHEN I am prompted for information about my application repository THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README

## Built With
- Javascript
- Node js
- Inquirer
- FS

## User Prompt
In the index.js app, the user is prompted to input username, email address, name of GitHub repo, title, description, install instructions, usage information, guidelines for contributing, applicaple tests, and license (if any).  

## Generate Markdown
In the generateMarkdown.js app, the user's inputted information is added to the README template and the license information is updated based on the license selected.

## README file created
The README file is created in the WritetoFile function and created as a file called generated-README.md.

## Demo Video 
https://github.com/texrob20/readme-generator/blob/main/demo/Node_js_challenge_demo.webm
Generated README - https://github.com/texrob20/readme-generator/blob/main/generated-README.md


