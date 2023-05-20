const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()

let arr = [293, 1000, 395, 678, 94];
let delete_list = [94, 777, 104, 1000, 1, 12];

let result = arr.filter((a) => 
!delete_list.includes(a));

console.log(result);











