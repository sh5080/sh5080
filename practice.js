const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')

let N = '02984'
let answer = 1
for(let i = 0; i < N.length; i ++){
    if(N[i]<2){
        answer+=Number(N[i])
    }else answer*=N[i]
}
console.log(answer)
