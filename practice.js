const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')

let N = 5
let count = 0
let t = ''
for(let i = 0; i <= N; i++){
    for(let j = 0; j<60; j++){
        for(let k = 0; k < 60; k++){
            if((String(i)+String(j)+String(k)).includes('3')){
                count++
            }
        }
    }
}

console.log(count)

