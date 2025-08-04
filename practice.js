const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");



function productExceptSelf(nums) {
  const result = []
  let temp = 1
  nums.map((num, index) => {
  const withoutCurrent = nums.filter((_, i) => i !== index)
  
  for(let i = 0; i < withoutCurrent.length; i++){
      temp = temp*withoutCurrent[i]
      if(i === withoutCurrent.length-1){
          result.push(temp)
          temp = 1
          }
  }
  return temp;
  })
 return result
}

console.log(productExceptSelf([1,2,3,4]));