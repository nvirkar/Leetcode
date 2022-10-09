/**
 * Leetcode-162
 * Find Peak Element
 * https://leetcode.com/problems/find-peak-element/
 */

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


console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
