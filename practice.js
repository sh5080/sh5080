const fs = require("fs");
let quiz = fs.readFileSync("./input.txt").toString().trim();
quizseparate = quiz.replace(/[\[\]\"]/g,"").split(' ')
let numA = quizseparate[0][0]
let cal = quizseparate[0][2]
let numB = quizseparate[0][4]
let calAB = quizseparate.slice(0,3).join('')

//for( let i = 0; i < quizseparate.length; i++){}



console.log(calAB)

//["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]
//a + b = c
//[0]