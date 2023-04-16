const fs = require("fs");
let lines = fs.readFileSync("./input.txt").toString().trim()

    let lineNum = []
    let crossNum = []
   for(let i = 0; i < lines.length; i++){
       for(let j = lines[i][0]; j<= lines[i][1]; j++){
           lineNum.push(j)
           console.log(lineNum)
       }
   }lineNum.sort((a,b)=>a-b)
    for(let i = 0; i < lineNum.length;i++){
        if(lineNum[i]===lineNum[i+1]){
            crossNum.push(lineNum[i])
            
            
        }
    }//console.log(lines)
    // if(crossNum.length<3) console.log(0)
    // else console.log (crossNum[crossNum.length-1]-crossNum[0])
