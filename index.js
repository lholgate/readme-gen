// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['Title','Description','Installation','Usage','License','Contributing','Tests','Question','GitUser','Email','Save'];
const licenseValues = ['Apache','MIT','GNU','Mozilla','Common','Eclipse','Open'];

let answers = [
    { title: 'Testing' },
    {
      description: [
        'Description Line 1',
        'Description Line 2',
        'Description Line 3'
      ]
    },
    {
      install: [
        'Standard Install',
        'Requires node.js with inquirer package installed'
      ]
    },
    { usage: [ 'node index.js' ] },
    { license: [ 'Common', 'Open' ] },
    { contributing: [ 'Lewis Holgate' ] },
    { tests: [ 'None' ] },
    { question: [ 'For any questions see contact information below -' ] },
    { gituser: 'lholgate' },
    { email: 'lholgate6162@gmail.com' }
  ];
let response = {};

//Function to prompt and save Title value
async function saveTitle(){
    await inquirer.prompt([
        {
        type: "input",
        name: "title",
        message: "What is the Title of your project?"
        }
    ]).then(function(data){
        answers.push(data);
    });
};

//Function to prompt for and save Description values
async function saveDescription(){
    await inquirer.prompt([
        {
        type: "input",
        name: "description",
        message: "Enter your project Description."
        }
    ]).then(function(data){
        if (answers.some(test => test.description)) {
            let ind = answers.findIndex(x => x.description);
            answers[ind].description.push(data.description);
        }
        else {
            let response ={description:[data.description]};
            answers.push(response);
        }
    });
};

//Function to prompt for and save Installation values
async function saveInstall(){
    await inquirer.prompt([
        {
        type: "input",
        name: "install",
        message: "Enter your project Install instruction."
        }
    ]).then(function(data){
        if (answers.some(test => test.install)) {
            let ind = answers.findIndex(x => x.install);
            answers[ind].install.push(data.install);
        }
        else {
            let response ={install:[data.install]};
            answers.push(response);
        }
    });
};

//Function to prompt for and save Usage values
async function saveUsage(){
    await inquirer.prompt([
        {
        type: "input",
        name: "usage",
        message: "Enter your project Usage information."
        }
    ]).then(function(data){
        if (answers.some(test => test.usage)) {
            let ind = answers.findIndex(x => x.usage);
            answers[ind].usage.push(data.usage);
        }
        else {
            let response ={usage:[data.usage]};
            answers.push(response);
        }
    });
};

//function to prompt for and save License values
async function saveLicense() {
    await inquirer.prompt([
        {
        type: "checkbox",
        name: "license",
        message: "Select your project Licenses.",
        choices: licenseValues
        }
    ]).then(function(data){
        if (answers.some(test => test.license)) {
            let ind = answers.findIndex(x => x.license);
            answers[ind].license=data.license;
        }
        else {
            answers.push(data);
        }
    });
};

//Function to prompt for and save Contributing values
async function saveTests() {
    await inquirer.prompt([
        {
        type: "input",
        name: "tests",
        message: "Enter Test information for your project."
        }
    ]).then(function(data){
        if (answers.some(test => test.tests)) {
            let ind = answers.findIndex(x => x.tests);
            answers[ind].tests.push(data.tests);
        }
        else {
            let response ={tests:[data.tests]};
            answers.push(response);
        }
    });
};

//Function to prompt for and save Contributing values
async function saveContributor() {
    await inquirer.prompt([
        {
        type: "input",
        name: "contributing",
        message: "Enter a Contributor for your project."
        }
    ]).then(function(data){
        if (answers.some(test => test.contributing)) {
            let ind = answers.findIndex(x => x.contributing);
            answers[ind].contributing.push(data.contributing);
        }
        else {
            let response ={contributing:[data.contributing]};
            answers.push(response);
        }
    });
};

//Function to prompt for and save Questions values
async function saveQuestions() {
    await inquirer.prompt([
        {
        type: "input",
        name: "question",
        message: "How do users submit questions about this project?"
        }
    ]).then(function(data){
        if (answers.some(test => test.question)) {
            let ind = answers.findIndex(x => x.question);
            answers[ind].question.push(data.question);
        }
        else {
            let response ={question:[data.question]};
            answers.push(response);
        }
    });
};

//Function to prompt for and save GitUser values
async function saveGitUser() {
    await inquirer.prompt([
        {
        type: "input",
        name: "gituser",
        message: "Enter your Git account."
        }
    ]).then(function(data){
        answers.push(data);
    });
};

//Function to prompt for and save Email values
async function saveEmail() {
    await inquirer.prompt([
        {
        type: "input",
        name: "email",
        message: "Enter your contact Email."
        }
    ]).then(function(data){
        answers.push(data);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    await inquirer.prompt([
        {
        type: "list",
        name: "currentTask",
        message: "Which section would you like to enter?",
        choices: questions
        }
    ]).then(function(data){
        console.log(data);
        response = data;
    });

    switch(response.currentTask){
        case "Title":
            await saveTitle();
            break;
        case "Description":
            await saveDescription();
            break;
        case "Installation":
            await saveInstall();
            break;
        case "Usage":
            await saveUsage();
            break;
        case "Tests":
            await saveTests();
            break;
        case 'Contributing':
            await saveContributor();
            break;
        case 'License':
            await saveLicense();
            break;
        case "Question":
            await saveQuestions();
            break;
        case "GitUser":
            await saveGitUser();
            break;
        case "Email":
            await saveEmail();
            break;
        case "Save":
            break;
    }   
    
    if (response.currentTask === "Save") {
        console.log(answers);
        console.log(generateMarkdown(answers));
    }
    else {
        response = {};
        init();
    }
   

}

// Function call to initialize app
init();