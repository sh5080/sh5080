const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split('\n')
let len = input[0].split(' ').map(Number)
let arr = new Array(len[0]).fill(0)

for (let i = input.length - 1; i >= 1; i--) {
  let num = input[i].split(' ').map(Number)
  for (let j = num[1] - 1; j >= num[0] - 1; j--) {
    if(arr[j]===0){
        arr[j] = num[2]
    }
  }
}
let answer = arr.join(' ')
console.log(answer)
