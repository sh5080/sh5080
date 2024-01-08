const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(a, b) {
  let answer = 0;
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

console.log("answer2:", solution([1, 4, 2], [5, 4, 4]));
console.log("answer3:", solution([1, 2], [3, 4]));
