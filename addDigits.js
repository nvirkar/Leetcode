/**
 * Leetcode-258
 * Add Digits
 */


var addDigits = function (num) {
    if (num < 10) {
        return num
    }
    sum = 0;
    while (num != 0) {
        rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10)
    }
    return addDigits(sum)
};


console.log(addDigits(38))
console.log(addDigits(0))
