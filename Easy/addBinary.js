/**
 * Leetcode-67
 * Add Binary
 * https://leetcode.com/problems/add-binary/
 * #Math
 */

var addBinary = function (a, b) {
  first = a.split("");
  second = b.split("");

  carry = 0;

  while (first.length > second.length) {
    second.unshift("0");
  }
  while (second.length > first.length) {
    first.unshift("0");
  }

  let res = [];

  for (let i = second.length - 1; i > -1; i--) {
    let sum = parseInt(first[i]) + parseInt(second[i]) + carry;
    if (sum > 1) {
      sum = sum - 2;
      carry = 1;
    } else {
      carry = 0;
    }
    res[i] = sum;
  }

  if (carry) {
    res.unshift(carry);
  }
  return res.join("");
};

console.log(addBinary("11", "1"));
console.log(addBinary("1", "11"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1111"));
