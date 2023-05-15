const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString()
let num = Number(input)
let temp = num
let answer = 0
let firstNum = 0

    while(true){
        let splitTemp = temp.toString().split('').map(Number) 
        if(splitTemp.length<2){
            splitTemp.unshift(0)
        }
        firstNum = (splitTemp[0]+splitTemp[1])%10
        temp = splitTemp[1]*10+firstNum
        answer++
            if(temp===num)
                break
    }

console.log(answer)


