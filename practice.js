const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++){
      for(let j = i + 1; j < nums.length; j++){
          if(nums[i] + nums[j] === target){
              return [i, j];
          }
      }
  }
  return [];
};
console.log(twoSum([2,5,5,11], 10));