const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let count = Number(input[0]);	
  for (let i = 0; i < count; i++) {
    num1 = Number(numbers[i][0]);
    num2 = Number(numbers[i][1]);

    console.log(`Case #${i} :${num1 + num2}`);
  }
  process.exit();
});

