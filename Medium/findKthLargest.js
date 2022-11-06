/**
 * Leetcode-215
 * Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

var findKthLargest = function (nums, k) {
  leave = 0;
  while (k != 0) {
    maxIndex = 0;
    for (let i = 0; i < nums.length - leave; i++) {
      if (nums[i] > nums[maxIndex]) {
        maxIndex = i;
      }
    }
    temp = nums[nums.length - 1 - leave];
    nums[nums.length - 1 - leave] = nums[maxIndex];
    nums[maxIndex] = temp;
    leave++;
    k--;
  }
  return nums[nums.length - leave];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
