/**
 * Leetcode-35
 * Search Insert Position
 * https://leetcode.com/problems/search-insert-position/
 */

var searchInsert = function (nums, target) {
    low = 0;
    numsLength = nums.length
    high = numsLength - 1
    if (target > nums[high]) {
        return numsLength
    }
    if (target < nums[0]) {
        return 0
    }
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return low
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 2))
