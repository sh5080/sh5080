const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(picture, k) {
  var answer = [];
  let temp = "";
  picture.map((a) => {
    for (let i = 0; i < a.length; i++) {
      temp += a[i].repeat(k);
    }
    for (let j = 0; j < k; j++) {
      answer.push(temp);
    }

    temp = "";
  });
  return answer;
}
console.log(
  "answer1:",
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);

// console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
