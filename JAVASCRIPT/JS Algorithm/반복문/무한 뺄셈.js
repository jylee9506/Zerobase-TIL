/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);
  
  let sum;
  while(1){
    sum = s - e;
    s = e;
    e = sum;

    if (e < 0) break;
    sequence.push(e);  
  }

  return sequence;
}

//  놓친 부분 : 처음부터 while 부분을 무한루프로 만들어 놓고 아래 조건식을 만드 것 

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
