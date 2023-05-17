const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split('\n')
let len = input[0].split(' ').map(Number)
let arr = []
for(let i = 1; i <= len[0]; i++){
arr.push(i)
}
for(let i = 1; i < input.length; i++){
    let splitNum = input[i].split(' ').map(Number)
    let start = splitNum[0]
    let end = splitNum[1]
    let reversed = arr.slice(start-1,end).reverse()
  arr.splice(start-1,reversed.length,...reversed)
}
let answer = arr.join(' ')
console.log(answer)
