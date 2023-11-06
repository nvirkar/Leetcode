/**
 * Leetcode-645
 * Set Mismatch
 * https://leetcode.com/problems/set-mismatch/
 * #CyclicSort
 */

swap = function (nums, first, second) {
  temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
};

var findErrorNums = function (nums) {
  res = [];
  numsLength = nums.length;
  i = 0;

  while (i < numsLength) {
    correct = nums[i] - 1;
    if (nums[i] != nums[correct]) {
      swap(nums, correct, i);
    } else {
      i++;
    }
  }

  for (i = 0; i < numsLength; i++) {
    if (nums[i] != i + 1) {
      return [nums[i], i + 1];
    }
  }
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
console.log(findErrorNums([2, 1, 4, 2, 6, 5]));
