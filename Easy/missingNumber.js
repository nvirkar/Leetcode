/**
 * Leetcode-268
 * Missing Number
 * https://leetcode.com/problems/missing-number/
 */

var missingNumber = function (nums) {
    initialSum = 0;
    numsActualSum = nums.reduce((initialSum, el) => initialSum + el);
    numsLength = nums.length;
    numsCalculatedSum = (numsLength * (numsLength + 1)) / 2;
    return numsCalculatedSum - numsActualSum;
};

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
