/**
 *  Leetcode-1342
 * Number of Steps to Reduce a Number to Zero
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * #Recursion
 * #Math
 */

var numberOfSteps = function (num) {
  return helper(num, 0);
};

var helper = function (num, steps) {
  if (num == 0) {
    return steps;
  } else if (num % 2 == 0) {
    return helper(Math.floor(num / 2), steps + 1);
  } else {
    return helper(num - 1, steps + 1);
  }
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
