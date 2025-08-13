/**
 * Leetcode-202
 * Happy Number
 * https://leetcode.com/problems/happy-number/
 * #Two pointers
 */

var isHappy = function (n) {
  slow = n;
  fast = n;

  do {
    slow = helper(slow);
    fast = helper(helper(fast));
    if (fast == 1) {
      return true;
    }
  } while (fast !== slow);
  return false;
};

var helper = function (num) {
  sum = 0;
  while (num != 0) {
    rem = num % 10;
    sum = sum + rem * rem;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(isHappy(19));
console.log(isHappy(2));
