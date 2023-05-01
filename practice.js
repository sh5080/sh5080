const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')
let h = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let t = Number(input[1])
let newM = m+t
if(newM>=60){
    newM = newM-60
    h+=1
}
if(h>=24){
    h-=24
}
let answer = h+' '+newM
  console.log(answer)
