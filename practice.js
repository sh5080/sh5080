const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let trim = s.trim().split(" ");
  let result = trim[trim.length - 1].length;

  return result;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));