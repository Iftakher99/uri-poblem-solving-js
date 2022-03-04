const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("/n");
const km = parseFloat(lines.shift());

const time = km * 2;

console.log(time + " " + "minutos");
