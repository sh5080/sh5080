const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(my_string) {
    var answer = [];
    let bigStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallStr = bigStr.toLowerCase()
let allStr = bigStr + smallStr
let result = new Array(allStr.length).fill(0)

    for(let i = 0; i < my_string.length; i++){
        let index = allStr.indexOf(my_string[i]);
        if (index !== -1) {
            result[index]++;
        }
    }

    return result;
}

// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
