const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
function solution(my_string, indices) {
    let splited = my_string.split('')
            for(let j = 0; j < indices.length; j++){
                (splited[indices[j]]) = '*'
            }
    splited = splited.join('')
    let answer = splited.replaceAll('*','')
        return answer;
    }


console.log('1:',solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));

// console.log('2:',solution("dxccxbbbxaaaa"));
// console.log('3:',solution("axbbxbxxxbbbbxxxxxcccc"));
// console.log('4:',solution("axbbxbxxxbbbbxxxxxccccxbb"));