// Inquirer required for Node application
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of your Project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage of your Project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation required for your Project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How to contribute to your Project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test instructions for your Project?',
  },
  {
    type: 'input',
    name: 'username',
    message: 'GitHub Username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email Address?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license is needed for your project?:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'Unlicense', 'Other'],
  },
];

// Function to write README file
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} file has been generated!`);
    }
  });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      // Generate the README using the users' input
      const readmeContent = generateMarkdown(answers);
  
      // Write the README file
      writeToFile('README.md', readmeContent);
    });
  }
  
  // Function call to initialize app
  init();
