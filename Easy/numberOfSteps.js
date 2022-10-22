/**
 *  Leetcode-1342
 * Number of Steps to Reduce a Number to Zero
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 */


var helper = function (num, count) {
    if (num == 0) {
        return count
    }
    if (num % 2 == 0) {
        return helper(Math.floor(num / 2), count + 1)
    } else {
        return helper(num - 1, count + 1)
    }
}


var numberOfSteps = function (num) {
    return helper(num, 0)
};

console.log(numberOfSteps(14))
console.log(numberOfSteps(8))
console.log(numberOfSteps(123))


