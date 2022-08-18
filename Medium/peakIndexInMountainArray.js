/**
 * Leetcode-852
 * Peak Index in a Mountain Array
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/submissions/
 */


var peakIndexInMountainArray = function (arr) {
    low = 0
    high = arr.length - 1

    while (low < high) {
        mid = low + Math.floor((high - low) / 2)
        if (arr[mid] > arr[mid + 1]) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return low
};

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))
