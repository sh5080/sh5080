const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')
let num = input[1].split('').map(Number).reduce((a,b)=>a+b)
console.log(num)

