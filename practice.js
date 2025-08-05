const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function isPalindrome(s) {
    const trimmed = s.replace(/[^a-zA-Z0123456789]/g, '').toLowerCase();
    const reversed = trimmed.split('').reverse().join('')
    return trimmed === reversed
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))