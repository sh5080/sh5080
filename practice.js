const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(code) {
  let mode = 0;
  let ret = "";
  const codeArray = code.split("");

  codeArray.forEach((e, i) => {
    if (mode === 0) {
      e !== "1" && i % 2 === 0 ? (ret += e) : e === "1" ? (mode = 1) : null;
    } else {
      e !== "1" && i % 2 === 1 ? (ret += e) : e === "1" ? (mode = 0) : null;
    }
  });

  return ret === "" ? "EMPTY" : ret;
}

console.log("enswer1:", solution("ab1cd1ef1gh"));
