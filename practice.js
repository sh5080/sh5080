const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()
let abc = 'abcdefghijklmnopqrstuvwxyz'
let result = ''
for(let i = 0; i < abc.length; i++){
  if(input.includes(abc[i])){
    result+=input.indexOf(abc[i])+' '
  }else result+=(-1)+' '
}

console.log(result.trim())

