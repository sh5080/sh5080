const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split('\n')
let len = input[0].split(' ').map(Number)
let arr = new Array(len[0]).fill(0)



let answer = arr.join(' ')
console.log(answer)
