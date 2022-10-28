/**
 * Leetcode-326
 * Power of Three
 * https://leetcode.com/problems/power-of-three/
 */


var isPowerOfThree = function (n) {
    binaryString = n.toString(3)
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


console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(-1))
console.log(isPowerOfThree(-27))
console.log(isPowerOfThree(19684))

