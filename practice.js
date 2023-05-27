const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');

let nums = [1,2,7,6,4]
  let add = []
  let temp = []

for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
        for(let k = j+1; k < nums.length; k++){
            add.push(nums[i]+nums[j]+nums[k])
    }
    }
}
for(let i = 0; i < add.length; i++){
  if(add[i]%2!==0){
let isPrime = true;
   for(let j = 3; j <= Math.sqrt(add[i]);j+=2){
    if(add[i]%j===0){
      isPrime = false;
      break;
    }
   }
   if(isPrime)     
   temp.push(add[i])
  }
}
console.log(temp)
console.log(add) 
// console.log(count)
console.log(Math.sqrt(6))
// 9 7 11 15 13 17
//2 5 

