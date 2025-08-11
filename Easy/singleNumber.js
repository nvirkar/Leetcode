/**
 * Leetcode-136
 * Single Number
 * https://leetcode.com/problems/single-number/
 * #Hashtable
 * #Bit Manipulation
 */

/**
 * Brute force dictionary approach
 */

var singleNumberBrute = function (nums) {
  let dict = {};
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] in dict) {
      dict[nums[i]] = dict[nums[i]] + 1;
    } else {
      dict[nums[i]] = 1;
    }
  }
  let ans = Object.keys(dict).find((key) => dict[key] == 1);
  return Number(ans);
};

/**
 * Bitwise operations
 * using ex-or operator
 * n^n =0 && n^0 = n
 */

var singleNumber = function (nums) {
  let res;

  for (let num of nums) {
    res = res ^ num;
  }

  return res;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

console.log(singleNumberBrute([2, 2, 1]));
console.log(singleNumberBrute([4, 1, 2, 1, 2]));
console.log(singleNumberBrute([1]));
