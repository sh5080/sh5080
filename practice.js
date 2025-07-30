const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;
  let temp = [];
  while (current1 != null) {
    temp.push(current1.val);
    current1 = current1.next;
  }
  while (current2 != null) {
    temp.push(current2.val);
    current2 = current2.next;
  }
  temp.sort((a, b) => a - b);
  let head = new ListNode();
  let result = head;
  temp.map((val) => {
    result.next = new ListNode(Number(val));
    result = result.next;
  });

  return head.next;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));