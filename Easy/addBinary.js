/**
 * Leetcode-67
 * Add Binary
 * https://leetcode.com/problems/add-binary/
 * #Math
 */

var addBinary = function (a, b) {
  while (a.length != b.length) {
    if (a.length > b.length) {
      b = "0" + b;
    } else {
      a = "0" + a;
    }
  }

  length = a.length;
  carry = 0;
  res = "";

  for (let i = length - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    if (sum > 1) {
      sum = sum - 2;
      carry = 1;
    } else {
      carry = 0;
    }
    res = sum.toString() + res;
  }
  if (carry == 1) {
    res = "1" + res;
  }
  return res;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1", "11"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1111"));
