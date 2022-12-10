// TODO: Create an array of questions for user input
const questions = [
    {
        name: "project_title",
        type: "input",
        message: "Enter your project title: ",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("\nPlease enter porject title!");
                return false;
            }
        },
    },
    {
        name: "description",
        type: "input",
        message: "Enter project description: ",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("\nPlease enter porject description!");
                return false;
            }
        },
    },

    {
        name: "installation",
        type: "input",
        message:
            "Provide a step-by-step description of how to get the development environment running.:",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("\nPlease enter step-by-step description!");
                return false;
            }
        },
    },
    {
        name: "usage",
        type: "input",
        message: "Provide instructions on how to use project.:",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("\nPlease enter instructions on how to use!");
                return false;
            }
        },
    },
    {
        name: "license",
        type: "list",
        message: "Which license would you like to use for your project?",
        choices: ["BSD", "MIT", "GNU GPL", "Apache", "(ISC) License"],
    },
    {
        name: "contributing",
        type: "confirm",
        message: "Would you like other developers to contribution to project?:",
    },
    {
        name: "tests",
        type: "input",
        message: "Please provide testing instructions for app. :",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("\nPlease enter testing instuctions!");
                return false;
            }
        },
    },
    {
        name: "questions",
        type: "input",
        message:
            "Provide instructions and examples for use. Include screenshots as needed. :",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log("\nPlease enter questions!");
                return false;
            }
        },
    },
];

module.exports = questions;
