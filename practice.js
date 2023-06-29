const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(numLog) {
    var answer = '';
 for(let i = 1; i < numLog.length; i++){
     if(numLog[i]===numLog[i-1]+1){
         answer+='w'
     }else if(numLog[i]===numLog[i-1]-1){
         answer+='s'
     }else if(numLog[i]===numLog[i-1]+10){
         answer+='d'
     }else if (numLog[i]===numLog[i-1]-10)
         answer+='a'
 }
    return answer;
}

console.log('1:',solution([0,1,0,10,0,1,0,10,0,-1,-2,-1]));
// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));