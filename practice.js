const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')

for(let i = 1; i < input.length; i++){
console.log(input[i][0]+input[i][input[i].length-1])
}

