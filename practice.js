const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()

let s = 'banana'
let answer = []
let temp = []
for(let i = 0; i < s.length; i++){
  if(!temp.includes(s[i])){
      answer.push(-1)
      temp.push(s[i])
      //console.log(temp)
  }else if(temp.includes(s[i])){
    temp.push(s[i])
    answer.push(temp.indexOf(s[i])+1)
    //temp[temp.indexOf(s[i])]=0
    temp.shift()
    console.log(temp)
    console.log(answer)
  }
}

//console.log(s.includes('b'))


// [-1,-1,-1,2,2,2]