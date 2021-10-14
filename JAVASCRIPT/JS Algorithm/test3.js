// <-------------------------------------------1번-------------------------------------------->
function solution(bj, one, two){
  let answer;
  let loser = one.concat(two);
  let money = (one.length * 150) + (two.length * 300) + (450);
  let winner = bj.filter(x => !loser.includes(x))
  answer = money + "만원" + "(" + winner + ")";
  return answer;
}
console.log(solution(
  ["혁준", "하밥", "양상", "심심이", "소스왕"], 
  ["혁준", "양상"],
  ["소스왕", "심심이"]
))
console.log(solution(
  ["스레빠", "만먹", "슬라임", "버그베어", "마린보이"], 
  ["마린보이", "버그베어"],
  ["만먹", "스레빠"]
))

// <-------------------------------------------2번-------------------------------------------->

function solution(pattern, str) {
  const words = str.split(' ');
  const patterns = pattern.split(" "); 

  for (let i = 0; i < words.length; i++) {
    const myMap = new Map ([[patterns[i], words[i]]])
    }
}

console.log(solution(
  "가 나 다 라",
  "바나나 드래곤 바나나 드래곤"
))



// <-------------------------------------------3번-------------------------------------------->


function solution(s){
  let answer;
  let stack = [];
  for(let i = 0; i < s.length; i++){
    if(stack.length > 0 && stack[stack.length-1] === s[i]){
        stack.pop();
    } else stack.push(s[i]);
  }
  answer = stack.join('');
  return answer;
}
console.log(solution("aacddefg"));
console.log(solution("abbac"));

// <-------------------------------------------4번-------------------------------------------->

function solution(N, K){
  let answer = 0;
  let dy = Array.from({length : N + 1}, () => 0);

  return answer; 
}

console.log(solution(5, 3))

// <-------------------------------------------5번-------------------------------------------->
