const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr) {
  let length = arr.length;
  length = 9;
  const countSqrt = Math.pow(2, Math.ceil(Math.sqrt(length + 1)));
  const newArr = [...arr, ...Array(countSqrt - length).fill(0)];
  console.log(countSqrt);
  console.log(Math.ceil(Math.sqrt(length)));
  return newArr;
}

console.log("answer1:", solution([1, 2, 3, 4, 5, 6]));
console.log("answer2:", solution([58, 172, 746, 89]));
