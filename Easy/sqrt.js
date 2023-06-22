/**
 * Leetcode-69
 * Sqrt(x)
 * https://leetcode.com/problems/sqrtx/
 * #BinarySearch
 */


var mySqrt = function (x) {
    if (x < 2) {
        return x;
    }
    low = 2;
    high = x;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);

        if (mid * mid == x) {
            return mid;
        } else if (mid * mid > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return high;
};


console.log(mySqrt(4))
console.log(mySqrt(8))
