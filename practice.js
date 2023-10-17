const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(s) {
    var answer = '';
    let arr = s.split(' ').map(Number).sort((a,b)=>a-b)
    let first = String(arr[0])
    let last = String(arr[arr.length-1])
    
    return first + ' ' + last;
}

// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
