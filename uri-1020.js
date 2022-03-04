const input = require("fs").readFileSync("stdin", "utf-8");
const age = parseInt(input.split(" "));

const years = parseInt(age / 365);

let x = parseInt(age % 365);

const months = parseInt(x / 30);
x = x % 30;
const days = x;

console.log(`${years} ano(s) 
${months} mes(es)
${days} dia(s)`);
