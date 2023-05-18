const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split('\n')
let score = input[1].split(' ').map(Number)
let sorted = score.sort((a,b)=>b-a)
let result = 0;

for(let i = 0; i < sorted.length; i++){
  result += sorted[i]/sorted[0]*100
}
let answer = result/input[0]
console.log(answer)

