const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { resolve } = require('path');
const Prompt = require('inquirer/lib/prompts/base');
var generatedContent = "";
// question set used to prompt user for information to generate README
const questions = [
    {
      type: 'input',
      message: "What is your GitHub username?",
      name: 'username',
      validate: function (ans) {
        if (ans) {
          return true;
        } else {
        return console.log("Please enter a username.");
        }}
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        validate: function (ans) {
          if (ans) {
            return true;
          } else {
          return console.log("Please enter an email address.");
          }}
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter a Github repo.");
            }}
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter a project title.");
            }}
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function (ans) {
            if (ans) {
              return true;
            } else {
            return console.log("Please enter a description for your project.");
            }}
    },
    {
        type: 'input',
        message: "If applicable, provide the step to install your application.  They will be included in the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide usage information and examples for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how others can contribute to the project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests for your application.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'none'],
        name: 'license'
    }
];

// creates the README file based on the generated markdown information
function writeToFile() {
    fs.writeFile('generated-README.md', generatedContent, function(err) {
      if (err) throw err;
      console.log('✔️  Successfully wrote to README.md');  
    });
  }

// Prompts user for answers, feeds answers to generateMarkdown, and writes to file
function init() {
  inquirer.prompt(questions)
  .then (answers => {
   generatedContent = generateMarkdown(answers);
  })  
  .then (generatedContent => {
    writeToFile(generatedContent)
  })  
}

// Function call to initialize app
init();
