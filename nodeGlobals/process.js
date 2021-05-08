// console.log("current process", process.argv);
// const [,,firstName, LastName] = process.argv;
// console.log(`Your First Name is ${firstName} and Last Name is ${LastName}`);
// console.log("Process Id", process.pid);

const grab = (flag) => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const gretting = grab("--gretting");
const user = grab("--user");

console.log(`${gretting} ${user}`);