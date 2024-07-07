/**
 * Leetcode-27
 * Remove Element
 * https://leetcode.com/problems/remove-element/
 * #Two pointers
 */

var removeElement = function (nums, val) {
  let pointer1 = 0;
  let numsLength = nums.length;
  for (let pointer2 = 0; pointer2 < numsLength; pointer2++) {
    if (nums[pointer2] != val) {
      nums[pointer1] = nums[pointer2];
      pointer1++;
    }
  }
  return pointer1;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
