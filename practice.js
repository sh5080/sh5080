const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(my_string, m, c) {
    let arr = [];
    for(let i = 0; i < my_string.length; i+=m){
        arr.push(my_string.slice(i,i+m))
    }
    let answer = arr.map((a)=>a[c-1]).join('')
    return answer;
}

console.log('1:',solution("ihrhbakrfpndopljhygc",4,2));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));