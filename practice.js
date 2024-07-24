const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 내가 푼 답 (해결못함.. )
function solution(people, limit) {
  let sorted = people.sort((a, b) => a - b);
  let sliced = sorted;
  let prev = 0;
  let boat = 0;
  let i = 0;

  while (sliced.length > 0) {
    if (sliced.length === 1) {
      boat++;
      return boat;
    }

    prev += sorted[i];
    if (prev === limit) {
      sliced = sorted.slice(i + 1, sorted.length);
      boat++;
      prev = 0;
    } else if (prev > limit) {
      sliced = sorted.slice(i, sorted.length);
      boat++;
    }
    i++;
  }
  return boat;
}
// gpt
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  let boats = 0;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    boats++;
  }

  return boats;
}
console.log("answer1:", solution([70, 50, 80, 50], 100));
