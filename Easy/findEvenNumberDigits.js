/**
 * Leetcode-1295
 * Find Numbers with Even Number of Digits
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */


var findNumbers = function (nums) {
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        numLength = nums[i].toString().length;
        if (numLength % 2 == 0) {
            count++;
        }
    }
    return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]))
console.log(findNumbers([555, 901, 482, 1771]))
