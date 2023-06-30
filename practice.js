const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(intStrs, k, s, l) {
    let result = intStrs.map((a)=>a.slice(s,s+l))
   let answer = result.filter((a)=>a>k).map(Number)
    return answer;
}

console.log('1:',solution(['0123456789','9876543210','9999999999999'],50000,5,5));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));