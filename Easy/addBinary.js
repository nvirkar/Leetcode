/**
 * Leetcode-67
 * Add Binary
 * https://leetcode.com/problems/add-binary/
 * #Math
 */

var addBinary = function (a, b) {
  let max = Math.max(a.length, b.length);

  while (a.length != max) {
    a = "0" + a;
  }

  while (b.length != max) {
    b = "0" + b;
  }

  let res = "";
  let c = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    aDigit = parseInt(a[i]);
    bDigit = parseInt(b[i]);

    tempRes = aDigit + bDigit + c;

    if (tempRes < 2) {
      res = tempRes + res;
      c = 0;
    } else {
      res = "" + tempRes - 2 + res;
      c = 1;
    }
  }
  if (c == 1) {
    res = "1" + res;
  }
  return res;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1", "11"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1111"));
