/**
 * Leetcode-1929
 * Concatenation of Array
 */


// using spread operator
// var getConcatenation = function (nums) {
//     return [...nums, ...nums]
// };


var getConcatenation = function (nums) {
    length = nums.length;
    for (let i = 0; i < length; i++) {
        nums.push(nums[i])
    }
    return nums
};

console.log(getConcatenation([1, 2, 1]))
console.log(getConcatenation([1, 3, 2, 1]))
