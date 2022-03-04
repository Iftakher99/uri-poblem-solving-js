const input = require("fs").readFileSync("stdin", "utf-8");
const number = parseInt(input.split(" "));

if (number < 1000000 && number > 0) {
  const note100 = Math.floor(number / 100);

  let x = number % 100;

  const note50 = Math.floor(x / 50);

  x = x % 50;

  const note20 = Math.floor(x / 20);

  x = x % 20;
  const note10 = Math.floor(x / 10);

  x = x % 10;
  const note5 = Math.floor(x / 5);

  x = x % 5;
  const note2 = Math.floor(x / 2);

  x = x % 2;
  const note1 = Math.floor(x / 1);

  x = x % 1;

  console.log(`${number}
${note100} nota(s) de R$ 100,00
${note50} nota(s) de R$ 50,00
${note20} nota(s) de R$ 20,00
${note10} nota(s) de R$ 10,00
${note5} nota(s) de R$ 5,00
${note2} nota(s) de R$ 2,00
${note1} nota(s) de R$ 1,00`);
} else {
  console.log("Number is not among 1000000");
}
