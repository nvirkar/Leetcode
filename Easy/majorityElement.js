/**
 * Leetcode-169
 * Majority Element
 * https://leetcode.com/problems/majority-element/
 * #Hashtable
 */

var majorityElement = function (nums) {
  let numsLength = nums.length;
  let limit = Math.floor(numsLength / 2);

  dict = {};
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] in dict) {
      dict[nums[i]] = dict[nums[i]] + 1;
    } else {
      dict[nums[i]] = 1;
    }

    if (dict[nums[i]] > limit) {
      return nums[i];
    }
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1]));
