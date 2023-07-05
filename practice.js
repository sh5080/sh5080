const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(myString, pat) {
  let answer = 0;
  let result = 0;
  for (let i = 0; i < myString.length; i++) {
    answer = myString.slice(i, i + pat.length);
    if (answer === pat) {
      result++;
    }
  }
  return result;
}

console.log("answer1:", solution("banana", "ana"));
console.log("answer2:", solution("aaaa", "aa"));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));
