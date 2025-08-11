/**
 * Leetcode-137
 * Single Number II
 * https://leetcode.com/problems/single-number-ii/description/
 * #Hashtable
 */

var singleNumber = function (nums) {
  let dict = {};
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (!(nums[i] in dict)) {
      dict[nums[i]] = 1;
    } else {
      dict[nums[i]] = dict[nums[i]] + 1;
    }
  }
  let ans = Object.keys(dict).find((key) => dict[key] == 1);
  return Number(ans);
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
