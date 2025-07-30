const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let result = haystack.indexOf(needle);
  return result;
};
console.log(strStr("hello", "ll"));