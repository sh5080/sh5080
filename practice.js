const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [start, end, divisor] = queries[i];

    for (let j = start; j <= end; j++) {
      if (j % divisor === 0) {
        arr[j] += 1;
      }
    }
  }

  return arr;
}

// console.log("answer2:", solution([58, 172, 746, 89]));
