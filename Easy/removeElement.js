/**
 * Leetcode-27
 * Remove Element
 * https://leetcode.com/problems/remove-element/
 */

var removeElement = function (nums, val) {
    pointer1 = 0;
    for (pointer2 = 0; pointer2 < nums.length; pointer2++) {
        if (nums[pointer2] !== val) {
            nums[pointer1] = nums[pointer2];
            pointer1++
        }
    }
    return pointer1;
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
