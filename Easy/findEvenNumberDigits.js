/**
 * Leetcode-1295
 * Find Numbers with Even Number of Digits
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 * #LinearSearch
 */

var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let numLength = nums[i].toString().length;
    if (numLength % 2 == 0) {
      count++;
    }
  }
  return count;
};

// Method 2 count no of digits using log or while loop

// var even = function (num) {
//   let digitsLength = Math.floor(Math.log10(num) + 1);
//   return digitsLength % 2 == 0;
// };

// var findNumbers = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (even(nums[i])) {
//       count++;
//     }
//   }
//   return count;
// };

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
