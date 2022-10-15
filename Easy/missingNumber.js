/**
 * Leetcode-268
 * Missing Number
 * https://leetcode.com/problems/missing-number/
 */

// var missingNumber = function (nums) {
//     sum = 0;
//     numsLength = nums.length;
//     for (i = 0; i < numsLength; i++) {
//         sum += nums[i]
//     }
//     calculatedSum = (numsLength * (numsLength + 1)) / 2;
//     return calculatedSum - sum;
// };


swap = function (nums, first, second) {
    temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
}
var missingNumber = function (nums) {
    i = 0;
    while (i < nums.length) {
        correct = nums[i]
        if (nums[i] < nums.length && nums[correct] != nums[i]) {
            swap(nums, correct, i)
        } else {
            i++
        }
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i
        }
    }
    return nums.length
};





console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
