const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr) {
    var answer = [];
    let i = 0
    let stk = [];
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i])
            i++;
        }else if(stk.length !== 0
            && stk[stk.length-1] === arr[i]
                ){
            stk.pop()
            i++;
        }else if(stk.length !== 0 
            && stk[stk.length-1] !== arr[i]
        ){
            stk.push(arr[i])
            i++;
        }
    }
    if(stk.length === 0){
        return [-1]
    }else return stk;
}
// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
