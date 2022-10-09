/**
 * Leetcode-852
 * Peak Index in a Mountain Array
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */


var peakIndexInMountainArray = function (arr) {
    low = 0
    high = arr.length - 1

    while (low < high) {
        mid = low + Math.floor(((high - low) / 2))

        if (arr[mid] > arr[mid + 1]) {
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

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))
console.log(peakIndexInMountainArray([0, 1, 3, 10, 5, 2]))
console.log(peakIndexInMountainArray([1, 2, 3, 5, 6, 4, 3, 2]))
console.log(peakIndexInMountainArray([1, 2, 3, 5, 6, 10, 15, 20, 25, 18]))



