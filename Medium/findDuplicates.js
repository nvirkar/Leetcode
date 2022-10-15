/**
 * Leetcode-442
 * Find All Duplicates in an Array
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 */

swap = function (nums, first, second) {
    temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
}

var findDuplicates = function (nums) {
    res = []
    i = 0;
    while (i < nums.length) {
        correct = nums[i] - 1
        if (nums[correct] != nums[i]) {
            swap(nums, correct, i)

        } else {
            i++
        }
    }
    console.log(nums)
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            res.push(nums[i])
        }
    }
    return res
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDuplicates([1, 1, 2]))
console.log(findDuplicates([1]))
