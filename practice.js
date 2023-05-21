const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()

let a = ["problemsolving", "practiceguitar", "swim", "studygraph"]
let b = [true, false, true, false]

let answer = [];
for(let i = 0; i < a.length; i++){
  if(b[i]===false){
    answer.push(a[i])
  }  
}

console.log(answer)









