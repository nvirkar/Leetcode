/**
 * Leetcode-442
 * Find All Duplicates in an Array
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * #CyclicSort
 */

swap = function (nums, first, second) {
  temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
};

var findDuplicates = function (nums) {
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
      res.push(nums[i]);
    }
  }

  return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1]));
