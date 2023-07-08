/**
 * Leetcode-154
 * Find Minimum in Rotated Sorted Array II0
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * #BinarySearch
 */

var findMin = function (nums) {
    pivot = findPivotWithDuplicates(nums)
    return nums[pivot + 1]
};


var findPivotWithDuplicates = function (nums) {
    low = 0;
    high = nums.length - 1;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)

        if (mid < high && nums[mid] > nums[mid + 1]) {
            return mid
        }
        if (mid > low && nums[mid] < nums[mid - 1]) {
            return mid - 1
        }

        if (nums[low] == nums[mid] && nums[high] == nums[mid]) {
            if (nums[low] > nums[low + 1]) {
                return low
            }
            low++
            if (nums[high] < nums[high - 1]) {
                return high - 1
            }
            high--
        }

        else if (nums[low] < nums[mid] || ((nums[low] == nums[mid]) && nums[mid] > nums[high])) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return -1
}



console.log(findMin([1, 3, 5]))
console.log(findMin([2, 2, 2, 0, 1]))






