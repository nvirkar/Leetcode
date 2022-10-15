/**
 * Leetcode-268
 * Missing Number
 * https://leetcode.com/problems/missing-number/
 */

var missingNumber = function (nums) {
    sum = 0;
    numsLength = nums.length;
    for (i = 0; i < numsLength; i++) {
        sum += nums[i]
    }
    calculatedSum = (numsLength * (numsLength + 1)) / 2;
    return calculatedSum - sum;
};

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
