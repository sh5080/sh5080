const fs = require("fs");
let my_string = fs.readFileSync("./input.txt").toString().trim().replace(/["]/g,"")

let str = my_string.split(' ')
let result = Number(str[0])
for(let i = 0; i < str.length; i++){
    if(str[i]==='+'){
        result = result+Number(str[i+1])
    }if(str[i]==='-'){
        result = result-Number(str[i+1])
    }
}

console.log(my_string)
console.log(str)
console.log(result)

/*
    for(let i = 0; i < my_string.length; i++){
        if(my_string.includes('+')){
            console.log (Number(str[0])+Number(str[1]))
        }else console.log (Number(str[0])-Number(str[1]))
    }
    */