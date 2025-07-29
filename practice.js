const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function reverse(list) {
  let result = [];
  const val = String(list);
  console.log(val);

  for (let i = list.length - 1; i > 0; i--) {
    console.log(i);
    result.push(list[i]);
  }
  console.log(result);
  return result;
}
var addTwoNumbers = function (l1, l2) {
  const list1 = reverse(l1).join("");
  const list2 = reverse(l2).join("");
  const temp = Number(list1) + Number(list2);

  console.log(temp);
  return temp;
};
addTwoNumbers([2, 4, 3], [5, 6, 4]);