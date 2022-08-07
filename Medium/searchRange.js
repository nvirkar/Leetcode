/**
 * Leetcode-34
 * Find First and Last Position of Element in Sorted Array
 */

var searchRange = function (nums, target) {
    numsLength = nums.length;
    if (numsLength == 1) {
        return nums[0] == target ? [0, 0] : [-1, -1]
    }
    low = 0;
    high = numsLength - 1;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (nums[mid] == target) {
            i = mid, j = mid
            while (nums[i] == target || nums[j] == target) {
                if (nums[i] == target) {
                    i--;
                }
                if (nums[j] == target) {
                    j++;
                }
            }
            return [i + 1, j - 1]
        }
        else if (nums[mid] > target) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return [-1, -1]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))
console.log(searchRange([1], 1))
console.log(searchRange([2, 2], 2))
console.log(searchRange([1, 3], 1))
console.log(searchRange([3, 3, 3], 3))



