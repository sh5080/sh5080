const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()
let result = ''
for(let i = 1; i <= input; i++){
  result+=' '.repeat(input-i)
  result+='*'.repeat(i*2-1)
  result+='\n'
}
for(let i = input-1; i >= 1; i--){
  result+=' '.repeat(input-i)
  result+='*'.repeat(i*2-1)
  result+='\n'
}
console.log(result.trimEnd())




