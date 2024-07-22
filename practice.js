const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// ** 내가 푼 답 (무한으로 빠지는 오류가 있음.)
// function solution(n) {
//   return func(n - 2) + func(n - 1);
// }
// function func(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return solution(n);
//   }
// }

function solution(n) {
  const num = 1234567;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % num;
    a = b;
    b = temp;
  }
  return b;
}

console.log("answer1:", solution(5));
