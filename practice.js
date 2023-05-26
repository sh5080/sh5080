const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');

function solution(n) { 
  let arr = [] 
  // 1은 소수가 아니고, 2부터 소수가 될 수 있으므로, 2부터 구하고자 하는 값까지의 배열을 만든다. 
  for (let i = 2; i <= n; i++) { 
      arr[i] = i 
  } 
  // 2부터 시작해서 2배수 이상의 숫자를 모두 지우되, 이미 지워진 숫자는 건너 뛴다. 
  for (let i = 2; i <= n; i++) { 
      for (let j = i + i; j <= n; j += i) { 
          if (arr[j] === 0) { 
              continue 
          } 
          arr[j] = 0 
      } 
  } 
  return arr.filter((item) => item !== 0).length 
}

console.log(solution(10))

