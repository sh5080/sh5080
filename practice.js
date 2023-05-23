const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');
let mypoint = 0
let mygrade = ''
let result = 0
let gradeToPoint = [4.5,4.0,3.5,3.0,2.5,2.0,1.5,1.0,0.0]
let grade = ['A+','A0','B+','B0','C+','C0','D+','D0','F']
let wholePoint = 0
for(let i = 0; i < input.length; i++){
  let splited = input[i].split(' ')
  mypoint = Number(splited[1])
  mygrade = splited[2]
if(mygrade!=='P'){
result+=mypoint*(gradeToPoint[grade.indexOf(mygrade)])
wholePoint+= mypoint
}
}
console.log(result/wholePoint)




