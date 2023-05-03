const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')
let num = [-3,33,13,1]

let numI = 0

for(let i = 0; i < num.length; i++){
    numI+=num[i]
    if(numI<0){
    numI-=num[i]
}

}

console.log(numI)

