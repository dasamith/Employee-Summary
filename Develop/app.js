const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var questions = [
    {
        type: 'list',
        name: 'employeeType',
        message: "What type of Employee would you like to make ?",
        choices: ['Manager', 'Intern', 'Engineer']
    },
];

inquirer.prompt(questions).then(function (answers) {
    console.log('these are our answers in the .then!!', answers);
    if (answers.employeeType === 'Intern') {

        internQuestions()

    } else if (answers.employeeType === 'Manager') {

        ManagerQuestions()
        console.log('time to ask manager question?')
    }


});


function internQuestions() {
    console.log('time to ask intern questions!!!')

    var questions = [
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name"
        },
        {
            type: 'input',
            name: 'Email',
            message: "What's your email name"
        },
        {
            type: 'input',
            name: 'school',
            message: "What's yours school ?"
        },
    ];

    inquirer.prompt(questions).then(function (answers) {
        console.log('these are our answers in the .then for intern questions!!', answers);
        var internWeCreated = new Intern(answers.first_name, 1, answers.Email, answers.school);
        console.log('this is intern we just made', internWeCreated)

    });
}

function ManagerQuestions() {
    console.log('time to ask intern questions!!!')

    var questions = [
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name"
        },
        {
            type: 'input',
            name: 'Email',
            message: "What's your email name"
        },
        {
            type: 'input',
            name: 'Office_number',
            message: "What's yours office number ?"
        },
    ];

    inquirer.prompt(questions).then(function (answers) {
        console.log('these are our answers in the .then for intern questions!!', answers);
        //var internWeCreated = new Manager(answers.first_name, 1, answers.Email, answers.school);
        //console.log('this is intern we just made', internWeCreated)

    });
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
