const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');

function solution(cards1, cards2, goal) {

let num1 = cards1.map((a)=>goal.indexOf(a))
let num2 = cards2.map((a)=>goal.indexOf(a))

let sorted1 = [...num1].sort((a,b)=>a-b) 
let sorted2 = [...num2].sort((a,b)=>a-b)

let isEqual1 = num1.every((value, index) => value === sorted1[index]);
console.log(isEqual1); 
let isEqual2 = num2.every((value, index) => value === sorted2[index]);
console.log(isEqual2); 


return isEqual1 && isEqual2
?  "Yes" : "No"



}console.log(solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"]))

