/**
 * Leetcode-260
 * Single Number III
 * https://leetcode.com/problems/single-number-iii/description/
 * #Hashtable
 */

var singleNumber = function (nums) {
  dict = {};
  numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] in dict) {
      dict[nums[i]] = dict[nums[i]] + 1;
    } else {
      dict[nums[i]] = 1;
    }
  }
  ans = Object.keys(dict)
    .filter((key) => dict[key] == 1)
    .map((e) => parseInt(e));
  return ans;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));
console.log(singleNumber([0, 1]));
