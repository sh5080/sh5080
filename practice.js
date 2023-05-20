const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()

let a = 1
let b = 1
let answer = '';
let day = ['THU','FRI','SAT','SUN','MON','TUE','WED']
let month = [0,0,31,29,31,30,31,30,31,31,30,31,30]
let date = b
for(let i = 0; i <= a; i++){
    date += month[i]
}

let result = date%7
answer=day[result]

console.log(answer)





