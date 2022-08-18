/**
 * Leetcode-34
 * Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

var searchRange = function (nums, target) {
    first = search(nums, target, true)
    last = search(nums, target, false)

    return [first, last]
};


var search = function (nums, target, isStart) {
    ans = -1
    numslength = nums.length;
    low = 0;
    high = numslength - 1;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (target < nums[mid]) {
            high = mid - 1
        } else if (target > nums[mid]) {
            low = mid + 1
        } else {
            ans = mid
            if (isStart) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
    }
    return ans
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))
console.log(searchRange([1], 1))
console.log(searchRange([2, 2], 2))
console.log(searchRange([1, 3], 1))
console.log(searchRange([3, 3, 3], 3))
