/**
 * Leetcode-66
 * Plus One
 * https://leetcode.com/problems/plus-one/
 * #Math
 */
var plusOne = function (digits) {
  let n = digits.length;

  for (i = n - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);

  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([9, 9, 9]));
