// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markDownJs = require("./utils/generateMarkdown.js");
const questions = require("./utils/questions.js");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
