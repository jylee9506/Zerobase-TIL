function solution(n){
  var answer = 0;
  let arr = [];
  let arr2 = [];
  
  for(let i = 0; i <= n; i++){
    arr += i.toString(2);
  }
  arr2 = arr.split("");
  for(let j = 0; j < arr2.length; j++){
    if(arr2[j] == 1) {answer ++};
  }
  
  return answer;
}

console.log(solution(3));
