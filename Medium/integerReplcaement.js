/**
 * Leetcode-397
 * Integer Replacement
 * https://leetcode.com/problems/integer-replacement/description/
 * #Recursion
 */

var getSteps = function (n, count) {
  if (n == 1) {
    return count;
  }
  if (n % 2 == 0) {
    return getSteps(Math.floor(n / 2), count + 1);
  } else {
    return Math.min(getSteps(n - 1, count + 1), getSteps(n + 1, count + 1));
  }
};

var integerReplacement = function (n) {
  return getSteps(n, 0);
};

console.log(integerReplacement(8));
console.log(integerReplacement(7));
console.log(integerReplacement(4));
console.log(integerReplacement(65535));
