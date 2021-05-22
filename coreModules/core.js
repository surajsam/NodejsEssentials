const path = require("path");
const util = require("util");
const v8 = require("v8")

console.log(path.join(__dirname, "lib", "helpers", "constants"));
util.log(path.join(__dirname, "lib", "helpers", "constants"));
const red = util.inspect.colors.red;
util.log(red)
console.log(v8.getHeapSpaceStatistics());