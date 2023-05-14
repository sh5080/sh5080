const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')
let num = input[1].split(' ').map(Number).sort((a,b)=>a-b)
let sum = 0
let answer = num.map(a=>sum+=a).reduce((a,b)=>a+b)
console.log(answer)

