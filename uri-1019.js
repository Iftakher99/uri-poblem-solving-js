const input = require("fs").readFileSync("stdin", "utf-8");
const time = parseInt(input.split(" "));

const hours = parseInt(time / 3600);
let x = time % 3600;
const minutes = parseInt(x / 60);
x = x % 60;
const seconds = parseInt(x);

console.log(`${hours}:${minutes}:${seconds}`);
