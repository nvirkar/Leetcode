/**
 * Leetcode-231
 * Power of Two
 * https://leetcode.com/problems/power-of-two/
 */

var isPowerOfTwo = function (n) {
    if (n <= 0) {
        return false
    } else {
        return (n & (n - 1)) == 0
    }
};


console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(-16))

