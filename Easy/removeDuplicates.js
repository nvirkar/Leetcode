/**
 * Leetcode-26
 * Remove Duplicates from sorted array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */


// og solution
var removeDuplicates = function (nums) {
    numsLength = nums.length;
    i = 0;
    for (j = 1; j < numsLength; j++) {
        if (nums[i] == nums[j]) {
            continue
        } else {
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1;
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

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
