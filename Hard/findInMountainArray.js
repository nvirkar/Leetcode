/**
 * Leetcode-1095
 * Find in Mountain Array
 * https://leetcode.com/problems/find-in-mountain-array/
 * #BinarySearch
 */


var search = function (nums, target) {
    high = nums.length - 1;
    peak = findPeakElement(nums)
    ascIndex = binarySearch(nums, target, 0, peak)
    if (ascIndex != -1) {
        return ascIndex
    } else {
        return binarySearch(nums, target, peak, high)
    }
}

var findPeakElement = function (nums) {
    low = 0
    high = nums.length - 1

    while (low < high) {
        mid = low + Math.floor(((high - low) / 2))

        if (nums[mid] > nums[mid + 1]) {
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
    isAsc = nums[low] < nums[high]

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (nums[mid] == target) {
            return mid;
        }

        if (isAsc) {
            if (nums[mid] > target) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (nums[mid] < target) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
    }
    return -1
}

console.log(search([1, 2, 3, 4, 5, 3, 1], 3))
console.log(search([0, 1, 2, 4, 2, 1], 3))
