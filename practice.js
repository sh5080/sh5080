const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()
let num = input.replace('\n',' ').split(' ').map(Number)
let N = num[0]
let M = num[1]
let K = num[2]
let data = num.slice(3).sort((a,b)=>a-b)
let first = data[data.length-1]
let second = data[data.length-2]
let result = 0;
    for(let i = 1; i<=M; i++){
        if(i%K !== 0){
            result += first
        }else {
            result += second
        }
    }

console.log(result)