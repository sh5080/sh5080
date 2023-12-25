const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(rank, attendance) {
  let answer = 0;
  const originRank = [...rank];
  const sortRank = rank.sort((a, b) => a - b);
  let sortAttendance = [];
  for (let i = 0; i < rank.length; i++) {
    sortAttendance.push(attendance[originRank.indexOf(sortRank[i])]);
  }
  const trueArr = sortAttendance
    .map((v, i) => (v === true ? i + 1 : undefined))
    .filter((index) => index !== undefined);

  const answerRank = trueArr.map((v) => originRank.indexOf(v));
  answer = answerRank[0] * 10000 + answerRank[1] * 100 + answerRank[2];
  return answer;
}

console.log(
  "answer1:",
  solution(
    [3, 7, 2, 5, 4, 6, 1],
    [false, true, true, true, true, false, false],
    20403
  )
);
console.log("answer2:", solution([1, 2, 3], [true, true, true], 102));
console.log(
  "answer3:",
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true], 50200)
);
