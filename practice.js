const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(s) {
  let temp = s;

  let deleteCount = 0;
  let deletedLength = s.length;
  let answerA = 0;
  let answerB = 0;
  while (deletedLength > 1) {
    deleteCount = temp.replaceAll("1", "").length;

    deletedLength = temp.length - deleteCount;

    temp = deletedLength.toString(2);
    answerA++;
    answerB += deleteCount;
  }
  return [answerA, answerB];
}
console.log("answer1:", solution("1111111"));
