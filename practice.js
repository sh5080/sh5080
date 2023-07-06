const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(x1, x2, x3, x4) {
  const result = (x1 || x2) && (x3 || x4);
  return result;
}

console.log("answer1:", solution("false", "true", "true", "true"));
console.log("answer2:", solution("true", "false", "false", "false"));
