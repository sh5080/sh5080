const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(' ').map(Number)
let chess = [1,1,2,2,2,8]

let answer = chess.map((a,b)=>{
  return a-input[b]
})

console.log(...answer)






