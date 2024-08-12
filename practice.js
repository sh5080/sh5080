const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(n, a, b) {
  let count = 1;
  while (n > 1) {
    if (Math.abs(a - b) === 1 && Math.min(a, b) % 2 === 1) {
      return count;
    }
    n = n / 2;
    count++;

    if (a % 2 === 0) {
      a = a / 2;
    } else {
      a = (a + 1) / 2;
    }

    if (b % 2 === 0) {
      b = b / 2;
    } else {
      b = (b + 1) / 2;
    }
  }
  return count;
}
console.log("answer1:", solution(16, 4, 9));
