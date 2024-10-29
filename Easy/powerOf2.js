/**
 * Leetcode-231
 * Power of Two
 * https://leetcode.com/problems/power-of-two/
 * #Math
 */

var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) == 0;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(-16));
