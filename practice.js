const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// ** 내가 푼 답, 효율성 91%... ㅠㅠ
function solution(n) {
  let result = 0;
  let temp = 0;
  for (let i = 1; i <= n / 2; i++) {
    for (let j = i; j <= n; j++) {
      temp += j;
      if (temp >= n) {
        if (temp === n) {
          result++;
        }
        temp = 0;
        break;
      }
    }
  }
  return result + 1;
}
console.log("answer1:", solution(15));

// gpt 답안
function solution(n) {
  let count = 0;
  for (let k = 1; (k * (k + 1)) / 2 <= n; k++) {
    if ((n - (k * (k - 1)) / 2) % k === 0) {
      count++;
    }
  }
  return count;
}

console.log(solution(15));
