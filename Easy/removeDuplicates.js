/**
 * Leetcode-26
 * Remove Duplicates from sorted array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * #Two pointers
 */

// og solution
var removeDuplicates = function (nums) {
  let numsLength = nums.length;
  let pointer1 = 0;
  for (let pointer2 = 1; pointer2 < numsLength; pointer2++) {
    if (nums[pointer1] != nums[pointer2]) {
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }
  return pointer1 + 1;
};

// other soultion
// var removeDuplicates = function (nums) {
//     numsLength = nums.length;
//     i = 1;
//     for (j = 1; j < numsLength; j++) {
//         if (nums[j] != nums[j - 1]) {
//             nums[i] = nums[j]
//             i++;
//         }
//     }
//     return i
// };

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
