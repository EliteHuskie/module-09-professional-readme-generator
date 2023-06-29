// Function that returns a license badge based on which license is selected
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'Unlicense':
      return 'http://unlicense.org/';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseLink = renderLicenseLink(license);
    return `## License\n\nThis project is licensed under the [${license}](${licenseLink}) license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  let markdownContent = '';

// Title that will be used in the README
  markdownContent += `# ${data.title}\n\n`;

// License Badge that is displayed near top of README
  if (licenseBadge) {
    markdownContent += `${licenseBadge}\n\n`;
  }
// Table of Contents for README
  markdownContent += `## Table of Contents\n\n`;
  markdownContent += `1. [Description](#description)\n`;
  markdownContent += `2. [Usage](#usage)\n\n`;
  markdownContent += `3. [Installation](#installation)\n`;
  markdownContent += `4. [Contributing](#contributing)\n\n`;
  markdownContent += `5. [Tests](#tests)\n\n`;
  markdownContent += `6. [License](#license)\n\n`;
  markdownContent += `7. [Questions](#questions)\n\n`;

// Sections that are used in the README
  markdownContent += `## Description\n\n`;
  markdownContent += `${data.description}\n\n`;
  markdownContent += `## Usage\n\n`;
  markdownContent += `${data.usage}\n\n`;
  markdownContent += `## Installation\n\n`;
  markdownContent += `${data.installation}\n\n`;
  markdownContent += `## Contributing\n\n`;
  markdownContent += `${data.contributing}\n\n`;
  markdownContent += `## Tests\n\n`;
  markdownContent += `${data.tests}\n\n`;

// License section for the link to the license that user input
  if (licenseBadge && licenseSection) {
    markdownContent += `${licenseSection}\n\n`;
  }

// Github Username + Email Address of User for README that displays in Questions section
  if (data.username || data.email) {
    markdownContent += `## Questions\n\n`;
    if (data.username) {
      const githubUrl = `https://github.com/${data.username}`;
      markdownContent += `Find me on GitHub: [${data.username}](${githubUrl})\n\n`;
    }
    if (data.email) {
      markdownContent += `Contact me at: [${data.email}](mailto:${data.email})\n\n`;
    }
  }

  return markdownContent;
}

module.exports = generateMarkdown;
