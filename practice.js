const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')

let M = input[0].split(' ').map(Number)[1] //8
let N = input[0].split(' ').map(Number)[2] //3
let arr = input[1].split(' ').map(Number)
let count = 0;
let answer = 0;
arr.sort((a,b)=>a-b)
let first = arr[arr.length-1]
let second = arr[arr.length-2]

while(M>0){
    for( let i = 1; i <= N; i++){
        answer+=first
        M-=1
        if (M === 0) 
        break
    }
    answer+=second
    M-=1
}

console.log(answer)

