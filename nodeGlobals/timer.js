const waitingTime = 5000;
const interval = 500;
let currentTime = 0;
const incTimer = () => {
    currentTime += interval;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waited for ${Math.floor(currentTime/waitingTime * 100)}% seconds`);
}
const waitInterval = setInterval(incTimer, interval);
const timeoutFucntion = () => {
    clearInterval(waitInterval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done");   
}
setTimeout(timeoutFucntion, waitingTime);
console.log(`waiting time in seconds ${waitingTime /1000}`);