const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')


for(let i = 1; i < input.length; i++){
let splited = input[i].split(' ').map(Number)
let len = splited.shift()
let avr = 0
avr = splited.reduce((a,b)=>a+b) / len

let num = splited.filter((a)=>
  a>avr
 )
 let answer = num.length/len*100
console.log(answer.toFixed(3)+'%')
}