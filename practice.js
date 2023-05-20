const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()

let answer = [];
let temp = []

for (let i = 0; i < s.length; i++) {
  
  if (!temp.includes(s[i])) {
    answer.push(-1);
    temp.push(s[i])
    continue
  }

  if(temp.includes(s[i])) { 
    answer.push(temp.length-temp.lastIndexOf(s[i]))
    temp.push(s[i])
  }

}
console.log(answer); 

// [-1,-1,-1,2,2,2]
// [-1,-1,1,-1,-1,-1]

