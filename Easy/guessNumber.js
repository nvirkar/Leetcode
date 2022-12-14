/**
 * Leetcode-374
 * Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 */

var guessNumber = function (n) {
    low = 0;
    high = n;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (guess(mid) == 0) {
            return mid
        } else if (guess(mid) > 0) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
};