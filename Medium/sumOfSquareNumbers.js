/**
 * Leetcode-633
 * Sum of Square Numbers
 * https://leetcode.com/problems/sum-of-square-numbers/
 */


//linear approach
var judgeSquareSum = function (c) {
    for (i = 0; i * i <= c; i++) {
        j = Math.sqrt(c - (i * i))
        if (Number.isInteger(j)) {
            return true
        }
    }
    return false
};


// binary approach
var judgeSquareSum = function (c) {
    low = 0;
    high = Math.floor(Math.sqrt(c));

    while (low <= high) {
        mid = low * low + high * high;
        if (mid == c) {
            return true
        }
        if (mid > c) {
            high--
        }
        else {
            low++
        }
    }
    return false
};

console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
