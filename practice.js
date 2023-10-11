const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(order) {
  var answer = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("americano") || order[i].includes("anything")) {
      answer += 4500;
    } else if (order[i].includes("cafelatte")) {
      answer += 5000;
    }
  }
  return answer;
}

// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
