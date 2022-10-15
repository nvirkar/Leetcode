/**
 * Leetcode-645
 * Set Mismatch
 * https://leetcode.com/problems/set-mismatch/
 */

swap = function (nums, first, second) {
    temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
}

var findErrorNums = function (nums) {
    res = []
    i = 0
    while (i < nums.length) {
        correct = nums[i] - 1
        if (nums[i] != nums[correct]) {
            swap(nums, i, correct)
        } else {
            i++
        }
    }
    // console.log(nums)
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return [nums[i], i + 1]
        }
    }
};

console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))
console.log(findErrorNums([2, 2]))
console.log(findErrorNums([2, 1, 4, 2, 6, 5]))


