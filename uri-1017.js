const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const s = parseInt(lines.shift());
const t = parseInt(lines.shift());

const d = s * t;
const fuel = d / 12;

console.log(fuel.toFixed(3));
