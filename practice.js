const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");


function groupAnagrams(strs) {
  const obj = {}
  strs.map((str)=> {

      if(!Object.keys(obj).includes(str.split('').sort().join(''))){
          obj[str.split('').sort().join('')] = [str]
      }else {
          obj[str.split('').sort().join('')].push(str)
      }
    })

  return Object.values(obj)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));