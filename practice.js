const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()

let str = input.split('')

if(str[0]===''){
  str.unshift()
}
input = str.join('')

console.log(input)






