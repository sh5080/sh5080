const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');
let result = []
let arr = []
let X = 0
let Y = 0
for(let i = 0; i < input.length; i++){
  let row = input[i].split(' ').map(Number)
  let max = row.reduce((a,b)=>Math.max(a,b))
  arr.push(row)
  result.push(max)
}
let max = result.reduce((a,b)=>Math.max(a,b))
for(let i = 0; i < arr.length; i++){
  arr[i].indexOf(max) > -1 ? X = i : 0 //arr[i].indexOf(max)+1 : 0
}
console.log(max)

Y = arr[X].indexOf(max)
console.log(X+1,Y+1)


