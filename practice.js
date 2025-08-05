const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function longestConsecutive(nums) {
    if(!nums.length) return 0
    const sorted = nums.sort((a,b)=> a-b)
    
    let firstNum = sorted[0]
    let tempNum = firstNum
    let count = 1
    let arr = []
    for(let i = 1; i < sorted.length; i++){
        if(tempNum === sorted[i]){
            tempNum = sorted[i]
            continue
        }else if(tempNum + 1 === sorted[i]){
            tempNum = sorted[i]
            count++
        }else {
            tempNum = sorted[i]
            arr.push(count)
            count = 1
        }

    }
    arr.push(count)
    return arr.sort((a,b)=> a-b)[arr.length-1]
}

console.log(longestConsecutive([100,4,200,1,3,2]))