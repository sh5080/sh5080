const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// ** 내가 푼 답 (효율성 문제 생김)
function solution(n) {
  let temp = n;
  let i = 0;

  while (i < temp.length - 1) {
    if (temp[i] === temp[i + 1]) {
      temp = temp.slice(0, i) + temp.slice(i + 2);
      i = Math.max(i - 1, 0);
    } else {
      i++;
    }
  }

  if (temp.length > 0) {
    return 0;
  } else {
    return 1;
  }
}
// 개선 답안
function solution(n) {
  const stack = [];
  for (let i = 0; i < n.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === n[i]) {
      stack.pop();
    } else {
      stack.push(n[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
console.log("answer2:", solution("dcdcaa"));
