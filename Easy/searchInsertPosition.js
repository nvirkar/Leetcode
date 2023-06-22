/**
 * Leetcode-35
 * Search Insert Position
 * https://leetcode.com/problems/search-insert-position/
 * #BinarySearch
 */

var searchInsert = function (nums, target) {
    low = 0;
    high = nums.length - 1;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (target == nums[mid]) {
            return mid
        }
        if (target < nums[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 2))
