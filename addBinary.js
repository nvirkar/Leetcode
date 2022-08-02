/**
 * Leetcode-67
 * Add Binary
 */

var addBinary = function (a, b) {
    aArr = a.split("")
    bArr = b.split("")
    aLength = aArr.length;
    bLength = bArr.length;
    // create same length
    if (aLength != bLength) {
        diff = Math.abs(aLength - bLength)
        while (diff != 0) {
            if (aLength > bLength) {
                bArr.unshift("0")
                diff--
            }
            else {
                aArr.unshift("0")
                diff--
            }
        }
    }
    aLength = aArr.length;
    bLength = bArr.length;
    res = [];
    carry = 0;
    for (i = aLength - 1; i > -1; i--) {
        res[i] = parseInt(aArr[i]) + parseInt(bArr[i]) + carry

        if (res[i] > 1) {
            carry = 1
            res[i] = res[i] == 2 ? 0 : 1
        } else {
            carry = 0
        }
    }
    if (carry == 1) {
        res.unshift(carry)
    }
    return res.join("")
};

console.log(addBinary("11", "1"))
console.log(addBinary("1", "11"))
console.log(addBinary("1010", "1011"))
