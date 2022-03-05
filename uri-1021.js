const input = require("fs").readFileSync("stdin", "utf-8");
const amount = +parseFloat(input).toFixed(2);

if (amount >= 0 && amount <= 1000000.0) {
  // exact note and coin
  let note = amount;

  let coin = +parseFloat(amount - parseInt(amount));

  // possible notes
  let note100, note50, note20, note10, note5, note2;

  note100 = parseInt(note / 100);
  note = parseInt(note % 100);
  note50 = parseInt(note / 50);
  note = parseInt(note % 50);
  note20 = parseInt(note / 20);
  note = parseInt(note % 20);
  note10 = parseInt(note / 10);
  note = parseInt(note % 10);
  note5 = parseInt(note / 5);
  note = parseInt(note % 5);
  note2 = parseInt(note / 2);
  note = parseInt(note % 2);
  // console.log(note100, note50, note20, note10, note5, note2);
  // possible Coins
  coin = note + coin;

  let coin100, coin50, coin25, coin10, coin5, coin1;

  coin100 = parseInt(coin / 1);
  coin = coin % 1;
  coin50 = parseInt(coin / 0.5);
  coin = coin % 0.5;
  coin25 = parseInt(coin / 0.25);
  coin = coin % 0.25;
  coin10 = parseInt(coin / 0.1);
  coin = coin % 0.1;
  coin5 = parseInt(coin / 0.05);
  coin = coin % 0.05;
  coin1 = parseInt(coin / 0.01);
  coin = coin % 0.1;
  console.log(`	
NOTAS:
${note100} nota(s) de R$ 100.00
${note50} nota(s) de R$ 50.00
${note20} nota(s) de R$ 20.00
${note10} nota(s) de R$ 10.00
${note5} nota(s) de R$ 5.00
${note2} nota(s) de R$ 2.00
MOEDAS:
${coin100} moeda(s) de R$ 1.00
${coin50} moeda(s) de R$ 0.50
${coin25} moeda(s) de R$ 0.25
${coin10} moeda(s) de R$ 0.10
${coin5} moeda(s) de R$ 0.05
${coin1} moeda(s) de R$ 0.01`);
} else {
  console.log("Not in Range");
}
