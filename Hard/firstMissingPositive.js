/**
 * Leetcode-41
 * First Missing Positive
 * https://leetcode.com/problems/first-missing-positive/
 */

swap = function (nums, first, second) {
    temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
}

var firstMissingPositive = function (nums) {
    i = 0;
    while (i < nums.length) {
        correct = nums[i] - 1
        if (nums[i] > 0 && nums[i] <= nums.length && nums[correct] != nums[i]) {
            swap(nums, correct, i)
        } else {
            i++
        }
    }
    console.log(nums)
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return i + 1
        }
    }
    return nums.length + 1
};

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([1, 2, 3, 4]));
console.log(firstMissingPositive([1]));
