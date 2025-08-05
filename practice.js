const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
        for(let j = i; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target) return [i+1,j+1]
        }
    }
}

console.log(twoSum([2,7,11,15],9))