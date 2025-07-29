const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString().split("").join("");
  const reversed = x.toString().split("").reverse().join("");

  return str === reversed;
};
console.log(isPalindrome(121));