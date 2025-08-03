const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");


function topKFrequent(nums, k) {
  const obj = {}
  nums.map((num)=> {
      obj[num] = !obj[num] ? 1 : Number(obj[num]) + 1
  })
return Object.keys(obj)
.sort((a, b) => obj[b] - obj[a]) 
.slice(0, k);
}

console.log(topKFrequent([1,1,1,2,2,3], 2));