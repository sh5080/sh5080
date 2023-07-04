const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(myString, pat) {

    let length_pat = myString.lastIndexOf(pat)
    let answer = myString.slice(0,length_pat+pat.length)
    return answer;
}

console.log("answer1:", solution(
    "AbCdEFG","dE"
    ));
    console.log("answer2:", solution(
        "AAAAaaaa","a"
        ));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));
