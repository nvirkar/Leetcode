/**
 * Leetcode-260
 * Single Number III
 * https://leetcode.com/problems/single-number-iii/description/
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
  let res = [];
  let keys = Object.keys(dict);
  let keyLength = keys.length;
  for (let i = 0; i < keyLength; i++) {
    if (dict[keys[i]] == 1) {
      res.push(keys[i]);
    }
  }
  return res;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));
console.log(singleNumber([0, 1]));
