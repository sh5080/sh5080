const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr, flag) {
let answer = []
for(let i = 0; i < arr.length; i++){
    if(flag[i]){
        answer.push(...Array(arr[i] * 2).fill(arr[i]));
        console.log('@:',answer)
    }

    else {
        answer.splice(-arr[i])
    }
}

return answer
}

console.log("1:", solution(
    [3, 2, 4, 1, 3],[true, false, true, false, false]
    ));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));
