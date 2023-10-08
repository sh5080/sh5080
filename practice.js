const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr) {
  let count = 0;
  let prevArr = arr;
  while (true) {
    const resultArr = prevArr.map((a) => {
      if (a >= 50 && a % 2 === 0) return a / 2;
      if (a < 50 && a % 2 === 1) return a * 2 + 1;
      return a;
    });
    const same = prevArr.every((a, i) => a === resultArr[i]);
    if (same) break;
    count += 1;

    prevArr = resultArr;
  }

  return count;
}

// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
