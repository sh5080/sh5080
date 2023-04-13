const fs = require("fs");
//let input = fs.readFileSync("./input.txt").toString().trim()
let dots = [[1, 0], [0, 1], [1, 2], [2, 1]]
dots.sort((a,b)=>a[0]-b[0])
let a = dots[0]
let b = dots[1]
let c = dots[2]
let d = dots[3]


if((a[0]-b[0])/(a[1]-b[1]) === (c[0]-d[0])/(c[1]-d[1])){
    console.log(2)
}else if(a===b && c===d){
    console.log(1)
}
else console.log(0)
