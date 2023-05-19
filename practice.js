const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n')

for(let i = 1; i <= input[0]; i++){
  let answer = ''
  let [splitStr,str] = input[i].split(' ')
  for(let j = 0; j < str.length; j++){
    answer+=str[j].repeat(splitStr)
  }
console.log(answer)
}




// AAABBBCCC
// /////HHHHHTTTTTPPPPP
