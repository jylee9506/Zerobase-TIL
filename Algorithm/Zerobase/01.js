function solution(nums){
  const length = nums.length;
  let student = [...Array(length+1).keys()].slice(1);

  for(x of nums){
    student[x-1] = -1;
  }
  return student.filter(total =>(0 < total))
}

console.log(solution([1,2,3,4,5,6,6,6]))