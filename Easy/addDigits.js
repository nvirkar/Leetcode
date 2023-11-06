/**
 * Leetcode-258
 * Add Digits
 * https://leetcode.com/problems/add-digits/
 * #Math
 */

var addDigits = function (num) {
  if (num <= 9) {
    return num;
  } else {
    sum = 0;
    while (num != 0) {
      rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return addDigits(sum);
  }
};

console.log(addDigits(38));
console.log(addDigits(0));
