const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === arr[i].length) {
      return arr;
    }
    if (arr.length > arr[i].length) {
      while (arr[i].length < arr.length) {
        arr[i].push(0);
      }
    }
    if (arr[i].length > arr.length) {
      while (arr.length < arr[i].length) {
        arr.push(new Array(arr[i].length).fill(0));
      }
    }
  }
  return arr;
}
console.log(
  "answer1:",
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);
console.log(
  "answer2:",
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);
console.log(
  "answer3:",
  solution([
    [1, 2],
    [3, 4],
  ])
);
// console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
