const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(my_string, overwrite_string, s) {
  let answer = "";
  let first = my_string.slice(0, s);
  let last = my_string.slice(s + overwrite_string.length);
  if (s === 0) {
    answer = overwrite_string + last;
  } else if (s + overwrite_string.length < my_string.length) {
    answer = first + overwrite_string + last;
  } else answer = first + overwrite_string;

  return answer;
}

console.log("answer1:", solution("He11oWor1d", "lloWorl", 2));
console.log("answer2:", solution("Program29b8UYP", "merS123", 7));
console.log("answer3:", solution("aaaaaa", "bbb", 3));
console.log("answer4:", solution("aaaaaa", "bbb", 2));
// console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
