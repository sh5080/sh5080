const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(myStr) {
  var answer = [];
  let a = myStr.replaceAll("a", "*");
  let b = a.replaceAll("b", "*");
  let c = b.replaceAll("c", "*");
  let result = c.split("*");
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== "") {
      answer.push(result[i]);
    }
  }
  if (answer[0] === undefined) {
    answer.push("EMPTY");
  }
  return answer;
}

console.log(
  "answer1:",
  solution("baconlettucetomato", ["onlettu", "etom", "to"])
);
// console.log("answer2:", solution([58, 172, 746, 89]));
