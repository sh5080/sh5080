const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');


function solution(myString) {
let abc = '0abcdefghijklmnopqrstuvwxyz'
    let answer = myString.split('x')
answer.filter((a)=>{
    a !== ''
})

    for(let i = 0; i < answer.length-1; i++){
        for(let j = 0; j < answer[i].length-1; j++){
            answer.sort((a,b)=>abc.indexOf(a[j])-abc.indexOf(b[j]))
        }
    }
// answer.sort((a,b)=>abc.indexOf(a[0])-abc.indexOf(b[0]))
    
    return answer
}
console.log(solution("xxxxxdxccxbbbxaaaxaxx"))
// console.log(solution('1x22x333x4444x'))
