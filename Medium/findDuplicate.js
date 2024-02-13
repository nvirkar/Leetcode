/**
 * Leetcode-287
 * Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/
 * #CyclicSort
 * #Array
 */
swap = function (nums, first, second) {
  temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
};

var findDuplicate = function (nums) {
  i = 0;
  numsLength = nums.length;
  while (i < numsLength) {
    correct = nums[i] - 1;
    if (nums[i] != nums[correct]) {
      swap(nums, correct, i);
    } else {
      i++;
    }
  }
  return nums[numsLength - 1];
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([1, 1]));
console.log(findDuplicate([1, 1, 2]));
console.log(findDuplicate([1, 2, 3]));
