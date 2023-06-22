/**
 * Leetcode-374
 * Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 * #BinarySearch
 */

var guessNumber = function (n) {
    low = 1;
    high = n;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (guess(mid) == 0) {
            return mid;
        } else if (guess(mid) == -1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
};