/**
 * Leetcode-367
 * Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/
 * #BinarySearch
 */

var isPerfectSquare = function (num) {
    if (num == 1) {
        return true;
    }

    low = 2;
    high = num;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (mid * mid == num) {
            return true;
        } else if (mid * mid < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
};

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
