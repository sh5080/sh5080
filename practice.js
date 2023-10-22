const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++) {
        let [s, e, k] = queries[i];
        let min = Infinity; 
        
        for(let j = s; j <= e; j++) {
            if(arr[j] > k && arr[j] < min) {
                min = arr[j];
            }
        }
        
        if(min === Infinity) {
            answer.push(-1); 
        } else {
            answer.push(min);
        }
    }
    return answer;
}


// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
