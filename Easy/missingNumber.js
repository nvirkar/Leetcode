/**
 * Leetcode-268
 * Missing Number
 * https://leetcode.com/problems/missing-number/
 * #CyclicSort
 */

// var missingNumber = function (nums) {
//     sum = 0;
//     numsLength = nums.length;
//     for (i = 0; i < numsLength; i++) {
//         sum += nums[i]
//     }
//     calculatedSum = (numsLength * (numsLength + 1)) / 2;
//     return calculatedSum - sum;
// };

swap = function (nums, first, second) {
  temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
};
var missingNumber = function (nums) {
  numsLength = nums.length;
  i = 0;
  while (i < numsLength) {
    correct = nums[i];
    if (nums[i] < numsLength && nums[correct] != nums[i]) {
      swap(nums, correct, i);
    } else {
      i++;
    }
  }
  for (i = 0; i < numsLength; i++) {
    if (nums[i] != i) {
      return i;
    }
  }
  return numsLength;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
