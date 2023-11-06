/**
 * Leetcode-9
 * Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * #Math
 */

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  originalNumber = x;
  reverse = 0;
  while (x != 0) {
    rem = x % 10;
    reverse = reverse * 10 + rem;
    x = Math.floor(x / 10);
  }
  return reverse === originalNumber;
};

console.log(isPalindrome(123));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
