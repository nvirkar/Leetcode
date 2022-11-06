/**
 * Leetcode-2221
 * Find Triangular Sum of an Array
 * https://leetcode.com/problems/find-triangular-sum-of-an-array/
 */

var triangularSum = function (nums) {
    let n = nums.length
    if (n == 1) {
        return nums[0]
    }
    let newArr = []
    for (let i = 0; i < n - 1; i++) {
        let el = (nums[i] + nums[i + 1]) % 10
        newArr.push(el)
    }
    return triangularSum(newArr)
};

console.log(triangularSum([1, 2, 3, 4, 5]));
console.log(triangularSum([5]));
