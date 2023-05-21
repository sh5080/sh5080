const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(' ')
input = input.map((a)=>{
    let reversed = a.split('').reverse().join('')
    return reversed
               })
    input.map(Number)
console.log(input[0]>input[1]?input[0]:input[1])


//437







