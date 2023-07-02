const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        const [s,e] = queries[i]
        for(let j = s; j <= e; j++){
            arr[j] += 1
        }
    }
 
    
    return arr
}


console.log('1:',solution([0,1,2,3,4], [[0,1],[1,2],[2,3]]));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));