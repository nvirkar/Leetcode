/**
 * Leetcode-153
 * Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * #BinarySearch
 */

var findMin = function (nums) {
    pivot = findPivot(nums)
    return nums[pivot + 1]
};


var findPivot = function (nums) {
    low = 0;
    high = nums.length - 1;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)

        if ((mid < high) && nums[mid] > nums[mid + 1]) {
            return mid
        }
        if ((mid > low) && nums[mid - 1] > nums[mid]) {
            return mid - 1
        }

        if (nums[low] >= nums[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}



console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([11, 13, 15, 17]))






