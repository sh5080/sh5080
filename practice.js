const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function isGroupWord(word) {
  const visited = new Set();
  for (let i = 0; i < word.length; i++) {
    if (visited.has(word[i])) {
      if (word[i] !== word[i - 1]) {
        return false;
      }
    } else {
      visited.add(word[i]);
    }
  }
  return true;
}

let count = 0;

for (let i = 1; i < input.length; i++) {
  if (isGroupWord(input[i])) {
    count++;
  }
}

console.log(count);

// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
// console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
