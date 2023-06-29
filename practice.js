const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(myString) {
  let abc = "0abcdefghijklmnopqrstuvwxyz";
  let answer = myString.split("x");
  let result = [];
  answer.push("x");
  for (let i = 0; i < answer.length - 1; i++) {
    if (answer[i] !== "") {
      result.push(answer[i]);
    }
  }

  return result.sort();
}

console.log('1:',solution("axbxcxdx"));
console.log('2:',solution("dxccxbbbxaaaa"));
console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));