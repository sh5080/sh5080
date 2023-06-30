const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(date1, date2) {
    for (let i = 0; i < 3; i++) {
        if (date1[i] < date2[i]) return 1;
        else if (date1[i] > date2[i]) return 0;
    }
    return 0; 
}


console.log('1:',solution([2022, 1, 1], [2023, 1, 1]));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));