/**
 * Leetcode-704
 * Binary Search
 * https://leetcode.com/problems/binary-search/
 * #BinarySearch
 */

var search = function (nums, target) {
    numsLength = nums.length;
    low = 0;
    high = numsLength - 1;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] == target) {
            return mid
        }
        else if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
