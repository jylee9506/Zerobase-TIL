// <-------------------------------------------1번-------------------------------------------->

function solution(n){
  let answer;
  let tmp = [];
  let arr = [];


  for(let i = 0; i <= n; i++){
    tmp.push(Math.cbrt(i));
    
    if(Number.isInteger(tmp[i])){
      arr.push(tmp[i]);
    }
  }
  
  const triple = arr[arr.length -1];
  answer = triple * triple * triple;

  return answer;
}

console.log(solution(15));
console.log(solution(125));

// <-------------------------------------------2번-------------------------------------------->

function solution(str){
  let answer = [];
  let str2 = [];
  let tmp = [];
  let cnt = {};

  for(let i = 1; i <= str; i++){
    str2.push(String(i));
  }

  tmp = str2.join('');
  tmp = tmp.split('');

  tmp.forEach((x) => {
    cnt[x] = (cnt[x] || 0) + 1
  });
  

  let arr = [];
  for (let x in cnt) {
    arr.push([x, cnt[x]]);
  }
  
  arr = arr.sort((a, b) => b[1] - a[1]);

  for(let i = 0; i < arr.length; i++){
    answer += arr[i][0] + ' ';
  }
  


  return answer;
}

console.log(solution(221123));

// <-------------------------------------------3번-------------------------------------------->

function solution(h, w){
  let answer;
  let dist= Array.from(Array(h), () => Array(w).fill(1));
  console.log(dist)
  
}

console.log(solution(2, 3))

// 1. h,w 로 된 표라 생각하고 1로 초기화  
// 2. 그 다음 대각선으로 더하다 보면 오른 쪽아래 값이 나옴


// <-------------------------------------------4번-------------------------------------------->
