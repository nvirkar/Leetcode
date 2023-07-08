/**
 * Leetcode-410
 * Split Array Largest Sum
 * https://leetcode.com/problems/split-array-largest-sum/
 * #BinarySearch
 */


var splitArray = function (nums, k) {
    start = 0;
    end = 0;
    for (i = 0; i < nums.length; i++) {
        start = Math.max(start, nums[i])
        end += nums[i]
    }


    while (start < end) {
        mid = start + Math.floor((end - start) / 2)

        sum = 0
        pieces = 1

        for (i = 0; i < nums.length; i++) {
            if (sum + nums[i] > mid) {
                sum = nums[i]
                pieces++
            } else {
                sum += nums[i]
            }
        }
        if (pieces > k) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return end
};

console.log(splitArray([7, 2, 5, 10, 8], 2))
console.log(splitArray([1, 2, 3, 4, 5], 2))
