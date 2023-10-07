const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr) {
  var answer = [];
  let startNum = arr.indexOf(2);
  let endNum = arr.lastIndexOf(2);
  if (startNum === -1) {
    return [-1];
  }
  for (let i = startNum; i <= endNum; i++) {
    answer.push(arr[i]);
  }
  return answer;
}

// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
