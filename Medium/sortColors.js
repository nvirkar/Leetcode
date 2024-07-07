/**
 * Leetcode-75
 * Sort Colors
 * https://leetcode.com/problems/sort-colors/
 * #Sorting
 */

var sortColors = function (nums) {
  let numsLength = nums.length;
  if (numsLength < 2) {
    return nums;
  }

  k: for (let i = 0; i < numsLength; i++) {
    let swapped = false;

    for (let j = 1; j < numsLength; j++) {
      if (nums[j - 1] > nums[j]) {
        temp = nums[j - 1];
        nums[j - 1] = nums[j];
        nums[j] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break k;
    }
  }
  return nums;
};

console.log(sortColors([0, 1, 2, 3, 4, 5]));
console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([3, 1]));
console.log(sortColors([1]));
console.log(sortColors([]));
