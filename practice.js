const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");


function maxArea(heights) {
    const sorted = [...heights].sort((a,b)=> b-a)

    function getAmount(startIdx, endIdx){
        const start = heights[startIdx]
        const end = heights[endIdx]
        let length = endIdx - startIdx > 0 ? endIdx - startIdx : 0 - (endIdx - startIdx)

        const amount = start > end ? end*length : start*length
        return amount
    }
    let tempAmount = 0

    for(let i = 0; i < heights.length; i++){
        for(let j = 1; j < heights.length; j++){

        let startIdx = heights.indexOf(sorted[i])
        let endIdx = heights.lastIndexOf(sorted[j])

        let amount = getAmount(startIdx, endIdx)
        if(tempAmount < amount) tempAmount = amount

        }
    }
    return tempAmount
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))