// <-------------------------------------------3번-------------------------------------------->

function solution(s){  
  var answer = 0;
  answer = eval(s);
  
  return answer;
}

// function solution(s){  
//   var answer = 0;
//   let s1 = s.split('+');
  
//   console.log(s1);
  
//   return answer;
// }

// console.log(solution('-3+26-7'));



// <-------------------------------------------4번-------------------------------------------->
function solution(n){  
  var answer = 0;
  cnt=1;
  n--;
  while(n>=0){
      cnt++;
      n-=cnt;
      if(n%cnt==0) answer++;
  }
  
  return answer;
}

console.log(solution(15));



// <-------------------------------------------5번-------------------------------------------->
function solution(s){
  var answer = 0;
  let s_arr = {};  
  s.split('').forEach((x) => { 
    s_arr[x] = (s_arr[x] || 0)+1; 
  });

  let maxKey = 0;
  let maxValue = 0;
  for([key, value] of Object.entries(s_arr)){
    if(value > maxValue){
      maxValue = value;
      maxKey = key
    }
  }
  answer = maxKey;
  return answer;
}

console.log(solution('174771177'))
