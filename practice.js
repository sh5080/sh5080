const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(n) {
  let batteryUsage = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      batteryUsage++;
    }
  }

  return batteryUsage;
}
console.log("answer1:", solution(6));
