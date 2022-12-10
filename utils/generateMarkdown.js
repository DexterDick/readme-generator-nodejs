// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "DSD") {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === "GNU GPL") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.project_title}\n\n## Description\n\n${data.description}\n\n## Table of Contents\n\n 1. [Installation](#installation)\n\n 2. [Usage](#usage)\n\n 3. [License](#license) \n\n 4. [Contributing](#contributing)\n\n ## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## License\n\n${data.license}\n\n## Contributing\n\n${data.contributing}\n\n## Test\n\n${data.tests}\n\n## Questions\n\n${data.questions}`;
}

module.exports = generateMarkdown;
