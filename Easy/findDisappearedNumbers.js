/**
 * Leetcode-448
 * Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * #CyclicSort
 */

swap = function (nums, first, last) {
  temp = nums[first];
  nums[first] = nums[last];
  nums[last] = temp;
};

var findDisappearedNumbers = function (nums) {
  res = [];
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

  for (i = 0; i < numsLength; i++) {
    if (nums[i] != i + 1) {
      res.push(i + 1);
    }
  }
  return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
