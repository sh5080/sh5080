const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");


/**
* @param {string[]} strs
* @returns {string}
*/
function encode(strs) {
   if(!strs.length) return "[]"
   let resultStr = "["
   strs.map((str)=>{
       resultStr = resultStr + `"${str}",` 
   })
   resultStr = resultStr.slice(0,-1) + "]"
   return resultStr
}

/**
* @param {string} str
* @returns {string[]}
*/
function decode(str) {
   if(str === "[]") return []
   let newArr = str.slice(1,str.length-1).split(`","`)
   newArr[0] = newArr[0].slice(1,newArr[0].length)
   newArr[newArr.length-1] = newArr[newArr.length-1].slice(0,-1)
    return newArr
}

console.log(encode(["Hello", "World"]));
console.log(decode(encode(["Hello", "World"])));