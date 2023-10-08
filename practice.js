const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(strArr) {
  let answer = {};
  strArr = strArr.map((a) => a.length).sort((a, b) => a - b);
  for (let i = 0; i < strArr.length; i++) {
    if (!answer[strArr[i]]) {
      answer[strArr[i]] = 0;
    }
    answer[strArr[i]]++;
  }
  const max = Math.max(...Object.values(answer));

  return max;
}

// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
