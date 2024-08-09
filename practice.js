const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(n) {
  const arr = n.sort((a, b) => a - b);
  const lastIdx = arr[arr.length - 1];

  let i = 1;
  let temp = 0;
  let result = 0;
  while (result < lastIdx ** 2) {
    for (let j = 0; j < arr.length; j++) {
      if ((lastIdx * i) % arr[j] !== 0) {
        break;
      } else {
        temp++;
      }
    }
    if (temp === arr.length) {
      result = lastIdx * i;
      break;
    }
    temp = 0;
    i++;
  }
  return result;
}
console.log("answer1:", solution([2, 6, 8, 14]));
// console.log("answer2:", solution([1, 2, 3]));
