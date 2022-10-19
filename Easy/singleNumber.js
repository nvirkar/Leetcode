/**
 * Leetcode-136
 * Single Number
 * https://leetcode.com/problems/single-number/
 */

/**
 * Brute force dictionary approach
 */

var singleNumberBrute = function (nums) {
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

/**
 * Bitwise operations
 * using ex-or operator
 * n^n =0 && n^0 = n
 */


var singleNumber = function (nums) {
    res = 0;
    for (const iterator of nums) {
        res ^= iterator
    }
    return res
};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))
