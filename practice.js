const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')

let N = 5
let t = ''
for(let i = 0; i < 60; i++){
    for(let j = 0; j<60; j++){
        t = i+j
    }
}

console.log(t)

