/**
 *  Leetcode-1342
 * Number of Steps to Reduce a Number to Zero
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * Recursion
 */

var numberOfSteps = function (num) {
  return helper(num, 0);
};

var helper = function (num, steps) {
  if (num == 0) {
    return steps;
  }
  isEven = num % 2 == 0;

  if (isEven) {
    return helper(Math.floor(num / 2), steps + 1);
  }
  return helper(num - 1, steps + 1);
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
