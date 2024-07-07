/**
 * Leetcode-202
 * Happy Number
 * https://leetcode.com/problems/happy-number/
 * #Two pointers
 */

var isHappy = function (n) {
  let slow = n;
  let fast = n;

  do {
    slow = getSquareOfDigits(slow);
    fast = getSquareOfDigits(getSquareOfDigits(fast));
  } while (slow != fast);

  if (fast == 1) {
    return true;
  }
  return false;
};

var getSquareOfDigits = function (n) {
  let sum = 0;
  while (n != 0) {
    digit = n % 10;
    sum = sum + digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
};

console.log(isHappy(19));
console.log(isHappy(2));
