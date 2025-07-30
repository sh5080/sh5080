const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let idx = nums.indexOf(target);
  if (idx != -1) return idx;
  if (target < nums[0]) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target && target < nums[i + 1]) {
      return i + 1;
    }
  }

  return nums.length;
};
console.log(searchInsert([1, 3, 5, 6], 7));