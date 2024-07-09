/**
 * Leetcode-2427
 * Number of Common Factors
 * https://leetcode.com/problems/number-of-common-factors/
 * #Array
 */

var commonFactors = function (a, b) {
  let min = Math.min(a, b);
  let count = 0;
  for (let i = 1; i <= min; i++) {
    if (a % i == 0 && b % i == 0) {
      count++;
    }
  }
  return count;
};

console.log(commonFactors(12, 6));
console.log(commonFactors(25, 30));
console.log(commonFactors(885, 885));
