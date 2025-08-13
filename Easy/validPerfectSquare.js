/**
 * Leetcode-367
 * Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/
 * #BinarySearch
 */

var isPerfectSquare = function (x) {
  low = 1;
  high = x;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (mid * mid == x) {
      return true;
    } else if (mid * mid < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
