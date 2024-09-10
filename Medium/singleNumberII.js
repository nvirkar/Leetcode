/**
 * Leetcode-137
 * Single Number II
 * https://leetcode.com/problems/single-number-ii/description/
 * #Hashtable
 */

var singleNumber = function (nums) {
  dict = {};
  numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (dict[nums[i]]) {
      dict[nums[i]] = dict[nums[i]] + 1;
    } else {
      dict[nums[i]] = 1;
    }
  }
  ans = Object.keys(dict).find((key) => dict[key] == 1);
  return ans;
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
