const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()
let answer = 1
for(let i = 0; i < Math.floor(input.length/2); i++){
  if(input[i]!==input[input.length-1-i]){
    answer = 0
  }
}

console.log(answer)
