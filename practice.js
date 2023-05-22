const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()
let str = input.toUpperCase()

let words = new Object()
for(let i = 0; i < str.length; i++){
  if(words[str[i]]===undefined){
    words[str[i]] = 1
  }else words[str[i]]+=1

}
let wordsArr = Object.entries(words).sort((a,b)=>b[1]-a[1])
wordsArr.length===1 ? console.log(wordsArr[0][0])
:wordsArr[0][1]===wordsArr[1][1] 
? console.log('?')
: console.log(wordsArr[0][0])

