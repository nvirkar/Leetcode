/**
 * Leetcode-397
 * Integer Replacement
 * https://leetcode.com/problems/integer-replacement/description/
 * #Recursion
 */

var integerReplacement = function (num) {
  return helper(num, 0);
};

var helper = function (num, steps) {
  if (num == 1) {
    return steps;
  } else if (num % 2 == 0) {
    return helper(Math.floor(num / 2), steps + 1);
  } else {
    return Math.min(helper(num - 1, steps + 1), helper(num + 1, steps + 1));
  }
};

console.log(integerReplacement(8));
console.log(integerReplacement(7));
console.log(integerReplacement(4));
console.log(integerReplacement(65535));
