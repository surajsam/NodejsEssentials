const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "How are you? ",
    "What are you doing? ",
    "Why are you doing? "
];


const done = (answers) => {
    console.log("Thanks for your answers");
    console.log(answers);
    process.exit();
}

const collectAnswers = (question, done) => {
    const answers = [];
    const [ firstQuestion ] = question;
    const questionAnswered = (answer) => {
        answers.push(answer);
        if (answers.length < question.length) {
            rl.question(question[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
}


collectAnswers(questions, done);
