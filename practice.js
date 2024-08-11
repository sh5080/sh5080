const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(n, words) {
  let first = 0;
  let second = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
      if (i === 1 && 1 / n <= 1) {
        first = i + 1;
        second = Math.floor(i / n) + 1;
      } else {
        first = (i % n) + 1;
        second = Math.floor(i / n) + 1;
      }
      return [first, second];
    }
    let set = new Set();
    for (let j = 0; j < words.length; j++) {
      set.add(words[j]);
      if (set.size === j) {
        first = (j % n) + 1;
        second = Math.floor(j / n) + 1;
        return [first, second];
      }
    }
  }
  return [first, second];
}
console.log(
  "answer1:",
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
