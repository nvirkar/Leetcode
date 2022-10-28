/**
 * Leetcode-338
 * Counting Bits
 * https://leetcode.com/problems/counting-bits/
 */

// converting to binary string
var getCountOf1 = function (n) {
    binaryString = n.toString(2)
    countOf1s = binaryString.split("").filter((el) => el == "1").length
    return countOf1s
}

var countBits = function (n) {
    let res = []
    for (i = 0; i <= n; i++) {
        res[i] = getCountOf1(i)
    }
    return res
};


// using bit manipulation
var countBits = function (n) {
    let res = []
    for (i = 0; i <= n; i++) {
        count = 0;
        let j = i;
        while (j != 0) {
            if ((j & 1) == 1) {
                count++
            }
            j = j >> 1
        }
        res[i] = count
    }
    return res
};


console.log(countBits(2))
console.log(countBits(5))
