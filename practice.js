const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')
let answer = ''
for(let i = 1; i<input.length; i++){
let num = input[i].split(' ')
answer+=(Number(num[0])+Number(num[1])+'\n')
}
console.log(answer)

