/**
 * Leetcode-136
 * Single Number
 * https://leetcode.com/problems/single-number/
 */


var singleNumber = function (nums) {
    numsLength = nums.length;
    if (numsLength == 1) {
        return nums[0]
    }
    dict = {}
    for (i = 0; i < numsLength; i++) {
        if (!(nums[i] in dict)) {
            dict[nums[i]] = 1
        } else {
            dict[nums[i]]++
        }
    }

    dictKeys = Object.keys(dict)
    for (let i = 0; i < dictKeys.length; i++) {
        if (dict[dictKeys[i]] == 1) {
            return dictKeys[i]
        }
    }
};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))
