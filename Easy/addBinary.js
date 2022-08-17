/**
 * Leetcode-67
 * Add Binary
 * https://leetcode.com/problems/add-binary/
 */

var addBinary = function (a, b) {
    maxLength = Math.max(a.length, b.length);
    i = a.length - 1
    j = b.length - 1
    carry = 0
    res = []
    k = maxLength - 1;
    while (a[i] || b[j]) {
        res[k] = parseInt(a[i] || 0) + parseInt(b[j] || 0) + carry
        if (res[k] < 2) {
            carry = 0;
        } else {
            carry = 1
            res[k] = res[k] - 2
        }

        i--;
        j--;
        k--;
    }
    if (carry == 1) {
        res.unshift(1)
    }
    return res.join("")
};

console.log(addBinary("11", "1"))
console.log(addBinary("1", "11"))
console.log(addBinary("1010", "1011"))
