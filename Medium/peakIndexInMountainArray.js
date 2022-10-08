/**
 * Leetcode-852
 * Peak Index in a Mountain Array
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */


var peakIndexInMountainArray = function (arr) {
    ans = -1
    low = 0
    high = arr.length - 1

    while (low <= high) {
        mid = low + Math.floor(((high - low) / 2))

        if (arr[mid] > arr[mid + 1]) {
            ans = mid;
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
};

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))
console.log(peakIndexInMountainArray([0, 1, 3, 10, 5, 2]))
console.log(peakIndexInMountainArray([1, 2, 3, 5, 6, 4, 3, 2]))
console.log(peakIndexInMountainArray([1, 2, 3, 5, 6, 10, 15, 20, 25, 18]))



