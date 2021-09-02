const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    /* ['5',[ '20 10 35 30 7' ] ]*/

    let N = +input[0];
    let nums = input[1].split(' ').map(Number);
    nums.sort((a,b)=> a-b);
    console.log(nums[0], nums[N-1]);
    

    process.exit();
});

