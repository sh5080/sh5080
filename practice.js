const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()
let result = input.split(' ')
let answer = 0
for(let i = 0; i < result.length; i++){
  if(result[i]!==''){
    answer++
  }
}
console.log(answer)
