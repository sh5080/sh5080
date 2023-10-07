const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(n, slicer, num_list) {
  var answer = [];
  if (n === 1) {
    for (let i = 0; i <= slicer[1]; i++) {
      answer.push(num_list[i]);
    }
  }
  if (n === 2) {
    for (let i = slicer[0]; i < num_list.length; i++) {
      answer.push(num_list[i]);
    }
  }
  if (n === 3) {
    for (let i = slicer[0]; i <= slicer[1]; i++) {
      answer.push(num_list[i]);
    }
  }
  if (n === 4) {
    for (let i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
      answer.push(num_list[i]);
    }
  }
  return answer;
}
// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
