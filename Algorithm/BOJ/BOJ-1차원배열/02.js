const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let N = [];
    for(let i =0; i<9; i++){
      N.push(Number(input[i]));
    }

    let max = N[0];
    let count = 0;

    for(let j =0; j<9; j++){
      if(N[j]>max){
        max=N[j];
        count=j;
      }
    }
    
    console.log(max);
    console.log(count+1);

    process.exit();
});

