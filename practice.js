const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')

input = [25,3]
let N = input[0]
let K = input[1]
let count = 0; 

while(N>1){
    if(N%K===0){
        N /= K
    }else N-=1
    count+=1
    
}


console.log(count)

