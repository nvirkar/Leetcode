/**
 * Leetcode-1095
 * Find in Mountain Array
 * https://leetcode.com/problems/find-in-mountain-array/
 * #BinarySearch
 */

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    return search(mountainArr, target)
};


var search = function (nums, target) {
    end = nums.length() - 1;

    peak = findPeakElement(nums)

    ascIndex = binarySearch(nums, target, 0, peak)
    if (ascIndex != -1) {
        return ascIndex
    } else {
        descIndex = binarySearch(nums, target, peak, end)
        return descIndex
    }
}

var findPeakElement = function (nums) {
    low = 0
    high = nums.length() - 1

    while (low < high) {
        mid = low + Math.floor(((high - low) / 2))

        if (nums.get(mid) > nums.get(mid + 1)) {
            // you are in descending order
            // this maybe one of the ans but we are not sure so we use mid
            high = mid
        } else {
            // you are in ascending order
            // mid +1 is definately greater than mid so you can start low at that
            low = mid + 1
        }
    }

    // in the end, low & high will point to same element when the loop breaks because of the condition
    // both the pointers will try to find the maxiumim elements according to the condition  
    return low
};

var binarySearch = (nums, target, low, high) => {
    isAsc = nums.get(low) < nums.get(high)

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (nums.get(mid) == target) {
            return mid;
        }

        if (isAsc) {
            if (nums.get(mid) > target) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (nums.get(mid) < target) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
    }
    return -1
}