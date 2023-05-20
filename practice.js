const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim()

let name = ["may", "kein", "kain", "radi"];
let yearning = [5, 10, 1, 3];
let photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"]
];
let answer = [];

for (let i = 0; i < photo.length; i++) {
  let sum = 0;
  photo[i].forEach((person) => {
    sum += yearning[name.indexOf(person)]||0;
  });
  answer.push(sum);
}

console.log(answer);





