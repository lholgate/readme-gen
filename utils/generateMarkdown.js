
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let indx = 0;
    let content = '';

    //Write title to return string
    indx = data.findIndex(x => x.title);
    content = '# ' + data[indx].title +'\n';

    //Write license in to return string
    indx = data.findIndex(x => x.license);

    //Display license badges at top of file
    for (const element of data[indx].license){
        content = content + `![badge](https://img.shields.io/badge/license-${element}-brightgreen)` +'\n';
    };

    //Write table of content to return string
    content = content + '## Table of Contents \n';
    content = content + '- [Description](#description) \n';
    content = content + '- [Installation](#installation) \n';
    content = content + '- [Usage](#usage) \n';
    content = content + '- [License](#license) \n';
    content = content + '- [Contributing](#contributing) \n';
    content = content + '- [Tests](#tests) \n';
    content = content + '- [Questions](#questions) \n';

    //Write description in to return string
    content = content + '## Description \n';
    indx = data.findIndex(x => x.description);
    for (const element of data[indx].description){
        content = content + element +' <br /> \n';
    };

    //Write installation in to return string
    content = content + '## Installation \n';
    indx = data.findIndex(x => x.install);
    for (const element of data[indx].install){
        content = content + element +' <br /> \n';
    };
    
    //Write usage in to return string
    content = content + '## Usage \n';
    indx = data.findIndex(x => x.usage);
    for (const element of data[indx].usage){
        content = content + element +' <br />\n';
    };

    //Write license in to return string
    content = content + '## License \n';
    indx = data.findIndex(x => x.license);
    for (const element of data[indx].license){
        content = content + `![badge](https://img.shields.io/badge/license-${element}-brightgreen)` +'\n';
        content = content + '<br />';
        content = content + `This application is covered by the ${element} license.` +'\n';
        content = content + '<br />';
    };

    //Write Contributing in to return string
    content = content + '## Contributing /> \n';
    indx = data.findIndex(x => x.contributing);
    for (const element of data[indx].contributing){
        content = content + element +' <br /> \n';
    };
    
    //Write Tests in to return string
    content = content + '## Tests \n';
    indx = data.findIndex(x => x.tests);
    for (const element of data[indx].tests){
        content = content + element +' <br />\n';
    };

     //Write questions in to return string
     content = content + '## Questions \n';
     indx = data.findIndex(x => x.question);
     for (const element of data[indx].question){
         content = content + element +' <br /> \n';
         content = content + '<br />';
     };

    //Write title to return string
    indx = data.findIndex(x => x.gituser);
    content = content + `Find me on GitHub: [${data[indx].gituser}](https://github.com/${data[indx].gituser})<br />` +'\n';

    //Write email to return string
    indx = data.findIndex(x => x.email);
    content = content + `Email me with any questions: ${data[indx].email}<br />` +'\n';

    return content;
}

module.exports = generateMarkdown;
