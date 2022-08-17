/**
 * Leetcode-66
 * Plus One
 * https://leetcode.com/problems/plus-one/
 */

var plusOne = function (digits) {
    digitsLength = digits.length
    for (i = digitsLength - 1; i > -1; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits
        } else {
            digits[i] = 0
        }
    }
    digits.unshift(1)
    return digits
};


console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9]))
console.log(plusOne([9, 9, 9]))

