/**
 * Leetcode-1016
 * Binary String With Substrings Representing 1 To N
 * https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/
 */

var queryString = function (s, n) {
    for (i = 1; i <= n; i++) {
        if (!(s.includes(i.toString(2)))) {
            return false
        }
    }
    return true
};


console.log(queryString("0110", 3));
console.log(queryString("0110", 4));
