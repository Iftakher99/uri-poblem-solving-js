const input = require("fs").readFileSync("stdin", "utf-8");
const [a, b, c] = input.split(" ").map((item) => parseInt(item));

const greatestAB = (a + b + Math.abs(a - b)) / 2;
const greatestXC = (c + greatestAB + Math.abs(c - greatestAB)) / 2;

console.log(`${greatestXC} eh o maior`);
