const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (x) {
  console.log(x);

  rl.close();
}).on("close", function () {
  process.exit();
});

// console.log("answer1:", solution([1, 2, 3, 4, 5, 6]));
// console.log("answer2:", solution([58, 172, 746, 89]));
