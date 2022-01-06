const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
  };
// Function call to initialize app
init();
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status