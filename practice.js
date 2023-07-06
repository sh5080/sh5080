const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(my_string, s, e) {
  let front = "";
  let mid = "";
  let back = "";
  front += my_string.slice(0, s);
  for (let i = e; i >= s; i--) {
    mid += my_string[i];
  }
  for (let i = e + 1; i < my_string.length; i++) {
    back += my_string[i];
  }
  return front + mid + back;
}
console.log("answer1:", solution("Progra21Sremm3", 6, 12));
