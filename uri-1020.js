const input = require("fs").readFileSync("stdin", "utf-8");
let ageInDays = parseInt(input);
let years, months;

years = parseInt(ageInDays / 365);
ageInDays = ageInDays % 365;

months = parseInt(ageInDays / 30);
ageInDays = ageInDays % 30;
const result = `${years} ano(s)
${months} mes(es)
${ageInDays} dia(s)`;
console.log(result);
