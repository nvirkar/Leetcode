/**
 * Leetcode-287
 * Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/
 */
swap = function (nums, first, second) {
    temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
}

var findDuplicate = function (nums) {
    i = 0;
    while (i < nums.length) {
        if (nums[i] != i + 1) {
            correct = nums[i] - 1
            if (nums[correct] != nums[i]) {
                swap(nums, correct, i)
            } else {
                return nums[i]
            }
        } else {
            i++
        }
    }
    return -1
};

console.log(findDuplicate([1, 3, 4, 2, 2]))
console.log(findDuplicate([3, 1, 3, 4, 2]))
console.log(findDuplicate([1, 1]))
console.log(findDuplicate([1, 1, 2]))
console.log(findDuplicate([1, 2, 3]))


