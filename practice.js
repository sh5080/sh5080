const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('')
let result = []
let dial = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
let abc = dial.map((a)=>{
  let splited = a.split('')
  return splited
})
for(let i = 0; i < input.length; i++){
  for(let j = 0; j < abc.length; j++){
    if(abc[j].includes(input[i])){
      result.push(abc.indexOf(abc[j])+2)
    }
  }
}
let answer = result.reduce((a,b)=>a+b)+input.length
console.log(answer)






