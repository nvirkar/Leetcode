/**
 * Leetcode-442
 * Find All Duplicates in an Array
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * #Hashtable
 */

var findDuplicates = function (nums) {
  res = [];
  dict = {};
  numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (!(nums[i] in dict)) {
      dict[nums[i]] = 1;
    } else {
      res.push(nums[i]);
    }
  }
  return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1]));
