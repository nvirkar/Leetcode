/**
 * Leetcode-137
 * Single Number II
 * https://leetcode.com/problems/single-number-ii/description/
 * #Hashtable
 */

var singleNumber = function (nums) {
  let numsLength = nums.length;
  let dict = {};
  for (let i = 0; i < numsLength; i++) {
    if (!(nums[i] in dict)) {
      dict[nums[i]] = 1;
    } else {
      dict[nums[i]]++;
    }
  }

  let keys = Object.keys(dict);
  let keyLength = keys.length;
  for (let i = 0; i < keyLength; i++) {
    if (dict[keys[i]] == 1) {
      return keys[i];
    }
  }
  return res;
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
