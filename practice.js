const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(a, d, included) {
    let answer = 0;
    let inc = []

    for(let i = a; i <=a+(d*(included.length-1)); i+=d){
        inc.push(i)
    }
    for(let i = 0; i < inc.length; i++){
        if(included[i]===true){
            answer+=inc[i]
            console.log(answer)
        }
    }
    return answer;
}

console.log('1:',solution(3,4,[true,false,false,true,true]));
// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));