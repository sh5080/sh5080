const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');

function solution(k, score) {
  let answer = [];
  let temp = []
  
  for(let i = 0; i < score.length; i++){
      temp.push(score[i])
      temp.sort((a,b)=>b-a)
      if(temp.length>k)
          temp.pop()
      answer.push(temp[temp.length-1])
  }

  return answer
}console.log(solution(3,[10, 100, 20, 150, 1, 100, 200]))

