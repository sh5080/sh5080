const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(str_list) {
    var answer = [];
    let earlyL = str_list.indexOf('l')
    let earlyR = str_list.indexOf('r')
    console.log('earlyL: ',earlyL, 'earlyR: ',earlyR)
    if(earlyL === -1 && earlyR === -1
      ){
        console.log('1번 케이스')
        return answer
    }
    else if(earlyL < earlyR && earlyL !== -1 ||
            earlyL > earlyR && earlyR === -1
           ){
        for(let i = 0; i < earlyL; i++){
            answer.push(str_list[i])
            console.log('2번 케이스',answer)
        }
    }
    else if(earlyL > earlyR && earlyR !== -1 || 
            earlyL < earlyR && earlyL === -1 ||
           earlyL < earlyR && earlyL === -1
       && str_list[0]==='r'
           ){
       for(let i = earlyR+1; i < str_list.length; i++){
            answer.push(str_list[i])
           console.log('3번 케이스',answer)
        }  
    }
    else {
        return answer
    }
    return answer;
}

// console.log(
//   "answer1:",
//   solution("baconlettucetomato", ["onlettu", "etom", "to"])
// );
console.log("answer2:", solution([1, 2, 1, 4, 5, 2, 9]));
