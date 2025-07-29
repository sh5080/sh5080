const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const int = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(int[s[i]]);
  }
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1] || i === arr.length - 1) result = result + arr[i];
    if (arr[i] < arr[i + 1]) result = result - arr[i];
  }
  return result;
};
console.log(romanToInt("MCMXCIV"));