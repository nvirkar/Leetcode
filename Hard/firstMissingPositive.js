/**
 * Leetcode-41
 * First Missing Positive
 * https://leetcode.com/problems/first-missing-positive/
 * #CyclicSort
 * #Array
 */

swap = function (nums, first, second) {
  temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
};

var firstMissingPositive = function (nums) {
  numsLength = nums.length;
  i = 0;
  while (i < numsLength) {
    correct = nums[i] - 1;
    if (correct > -1 && correct < numsLength && nums[correct] != nums[i]) {
      swap(nums, correct, i);
    } else {
      i++;
    }
  }

  for (let i = 0; i < numsLength; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }

  return numsLength + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([1, 2, 3, 4]));
console.log(firstMissingPositive([1]));
