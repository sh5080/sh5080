const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");


function threeSum(nums) {
    const temp = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    let sorted = [nums[i], nums[j], nums[k]].sort((a,b)=> a-b)
                    temp.push(sorted)
                }
            }
        }
    }

    const numSet = new Set()

    temp.map((str)=>{
    let sortedStr = JSON.stringify(str)
      if(!numSet.has(sortedStr)){
        numSet.add(sortedStr);
    }
    })
const stringArray = Array.from(numSet);
const numberArrays = stringArray.map(str => JSON.parse(str));

return numberArrays
}

console.log(threeSum([-1,0,1,2,-1,-4]))