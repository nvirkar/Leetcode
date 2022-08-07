/**
 * Leetcode-1
 * Two Sum
 */

var twoSum = function (nums, target) {
    dict = {};
    numsLength = nums.length;
    for (i = 0; i < numsLength; i++) {
        if (!(nums[i] in dict)) {
            dict[target - nums[i]] = i;
        } else {
            return [dict[nums[i]], i]
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
