const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// ** 내가 푼 답
function calculateOneCount(number) {
  let oneCount = number.toString(2).replaceAll("0", "").length;
  return oneCount;
}
function solution(n) {
  let origin = calculateOneCount(n);
  let next = "";
  let i = 1;
  let temp = 0;
  while (next != origin) {
    temp = n + i;
    next = calculateOneCount(temp);
    i++;
  }
  return temp;
}

console.log("answer1:", solution(78));
