/**
 * Leetcode-229
 * Majority Element II
 * https://leetcode.com/problems/majority-element-ii/
 */

var majorityElement = function (nums) {
  let numsLength = nums.length;
  let limit = Math.floor(numsLength / 3);

  dict = {};
  myset = new Set();
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] in dict) {
      dict[nums[i]] = dict[nums[i]] + 1;
    } else {
      dict[nums[i]] = 1;
    }

    if (dict[nums[i]] > limit) {
      myset.add(nums[i]);
    }
  }

  return [...myset];
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 2]));
console.log(majorityElement([2, 2]));
