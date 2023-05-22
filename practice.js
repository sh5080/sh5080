const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()

let cro = ['c=','c-','dz=','d-','lj','nj','s=','z=']
let result = []

for(let i = 0; i < input.length; i++){
for(let j = 0; j < cro.length; j++){

  if(input[i]+input[i+1]===cro[j]){
    result.push(input[i]+input[i+1])
  }else if(input[i]+input[i+1]+input[i+2]===cro[j]){
    result.push(input[i]+input[i+1]+input[i+2])
  }
} 
  }
  console.log(input.length-result.length)




