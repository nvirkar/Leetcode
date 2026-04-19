/**
 * Leetcode-287
 * Find the Duplicate Number
 * https://leetcode.com/problems/find-the-duplicate-number/
 * #Hashtable
 * #Array
 */

var findDuplicate = function (nums) {
  dict = {};
  numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (!(nums[i] in dict)) {
      dict[nums[i]] = 1;
    } else {
      return nums[i];
    }
  }

  return numsLength;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([1, 1]));
console.log(findDuplicate([1, 1, 2]));
console.log(findDuplicate([1, 2, 3]));
