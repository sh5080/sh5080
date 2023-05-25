const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');


function binary_search(arr,item){
let low = 0
let high = arr.length-1


while(low<= high){
  let mid = Math.floor((low + high)/2)
  let guess = arr[mid]
  if(guess < item){
    low = mid + 1
  }if( guess === item){
    return mid
  }if ( guess > item){
    high = mid - 1
  }else {
    low = mid+1
  }
}
}
console.log(binary_search([1,3,5,7,9],7)) //3


