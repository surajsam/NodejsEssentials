const question = [
    "What is your Name ?",
    "Which country do you live in?",
    "How old are you",
]

let answer = [];
const ask = (i=0) => {
    process.stdout.write(`\n ${question[i]} > `);
}

process.stdin.on("data", data => {
    answer.push(data);
    if(answer.length < question.length) {
        ask(answer.length);
    }else {
        process.exit();
    }
})

process.on("exit", () => {
    const [ name, country, age ] = answer
    console.log(`
    Thanks for your answers
    ${name}
    My proflie
    age = ${ age },
    country=${country}
    `
    );
})
ask();