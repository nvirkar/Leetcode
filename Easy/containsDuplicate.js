/**
 * Leetcode-217
 * Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 */

var containsDuplicate = function (nums) {
    dict = {}
    numsLength = nums.length
    for (let i = 0; i < numsLength; i++) {
        if (!(nums[i] in dict)) {
            dict[nums[i]] = 1
        } else {
            return true
        }
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
