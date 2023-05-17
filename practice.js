const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split('\n')
let len = input[0].split(' ').map(Number)
let arr = []
for(let i = 1; i <= len[0]; i++){
arr.push(i)
}

for(let i = 1; i < input.length; i++){
    let splitNum = input[i].split(' ').map(Number)
    let a = splitNum[0]
    let b = splitNum[1]
    let temp = arr[a-1];
        arr[a-1] = arr[b-1];
        arr[b-1] = temp;
}
let answer = arr.join(' ')
console.log(answer)