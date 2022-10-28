/**
 * Leetcode-342
 * Power of Four
 * https://leetcode.com/problems/power-of-four/
 */

var isPowerOfFour = function (n) {
    binaryString = n.toString(4)
    if (n <= 0 || binaryString[0] == '-') {
        return false
    } else {
        countOf0 = binaryString.split("").filter((e) => e == "0").length
        countOf1 = binaryString.split("").filter((e) => e == "1").length
        if (countOf1 != 1) {
            return false
        }
        return binaryString.length == (countOf0 + countOf1)
    }
};

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(1))
