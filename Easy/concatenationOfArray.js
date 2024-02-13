/**
 * Leetcode-1929
 * Concatenation of Array
 * https://leetcode.com/problems/concatenation-of-array/
 * #Array
 */


// using spread operator
// var getConcatenation = function (nums) {
//     return [...nums, ...nums]
// };


var getConcatenation = function (nums) {
    let result = []
    let numsLength = nums.length;
    for (let i = 0; i < numsLength; i++) {
        result[i] = nums[i]
        result[i+numsLength] = nums[i]
    }
    return result
};

console.log(getConcatenation([1, 2, 1]))
console.log(getConcatenation([1, 3, 2, 1]))
