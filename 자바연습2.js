const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(' ').map(Number);

const days = ["Mon", "Tue", "Wed", "Thus", "Fri"];
const smilmingDays = days.map((day,index) => '#${index}  ${day}'); 
console.log(smilmingDays);   