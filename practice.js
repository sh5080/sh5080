const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')

let str = 'K O R E A'
let count = 450

let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
let num = []
let result = []
let answer = ''

for(let i = 65; i <= 90; i++){
   num.push(i)
}
num.push(32)

for(let i = 0; i < str.length; i++){
    let temp = abc.indexOf(str[i])
    count -= num[temp]
    result.push(num[temp])
    
    if(count<=0)
    break
    answer+=str[i]
}
console.log(result)
console.log(answer)
