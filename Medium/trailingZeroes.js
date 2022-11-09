/**
 * Leetcode-172
 * Factorial Trailing Zeroes
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 */

var trailingZeroes = function (n) {
  count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i = i * 5) {
    count = count + Math.floor(n / i);
  }
  return count;
};

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(0));
console.log(trailingZeroes(30));
