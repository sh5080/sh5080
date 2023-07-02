const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(board, k) {
    let answer = 0
for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
        if(i + j <= k){
            answer+=(board[i][j])
        }
    }
}
    return answer;
}

console.log('1:',solution([[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]], 2));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));