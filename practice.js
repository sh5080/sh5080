const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr, k) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      answer.push(arr[i]);
      if (answer.length === k) {
        break;
      }
    }
  }
  if (answer.length <= k) {
    while (answer.length < k) {
      answer.push(-1);
    }
  }
  return answer;
}
console.log("answer1:", solution([0, 1, 1, 2, 2, 3], 3));
console.log("answer2:", solution([0, 1, 1, 1, 1], 4));
// console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
