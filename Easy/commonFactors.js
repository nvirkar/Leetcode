/**
 * Leetcode-2427
 * Number of Common Factors
 * https://leetcode.com/problems/number-of-common-factors/
 */

var commonFactors = function (a, b) {
    if ((a - b) > 0) {
        max = a;
    } else {
        max = b;
    }
    count = 0
    for (i = 1; i <= max; i++) {
        if (((a % i) == 0) && ((b % i) == 0)) {
            count++
        }
    }
    return count;
};

console.log(commonFactors(12, 6))
console.log(commonFactors(25, 30))
