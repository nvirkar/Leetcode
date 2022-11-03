/**
 * Leetcode-961
 * N-Repeated Element in Size 2N Array
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */

var repeatedNTimes = function (nums) {
    dict = {}

    for (i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) {
            return nums[i]
        } else {
            dict[nums[i]] = 1;
        }
    }
};


console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
