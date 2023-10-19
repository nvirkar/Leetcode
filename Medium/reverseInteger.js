/**
 * Leetcode-7
 * Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 * Math
 */

var reverse = function (x) {
  result = 0;
  sign = x < 0 ? -1 : 1;
  x = x * sign;
  while (x != 0) {
    rem = x % 10;
    result = result * 10 + rem;
    x = Math.floor(x / 10);
  }
  result = result * sign;
  max = Math.pow(2, 31) - 1;
  min = Math.pow(2, 31) * -1;
  if (result >= max || result <= min) {
    return 0;
  }
  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
