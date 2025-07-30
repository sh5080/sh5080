const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return result.toString(2);
};

console.log(addBinary("11", "1"));