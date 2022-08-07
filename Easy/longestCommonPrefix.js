/**
 * Leetcode-14
 * Longest Common Prefix
 */

var longestCommonPrefix = function (strs) {
    result = ""
    first = strs[0];
    k:
    for (i = 0; i < first.length; i++) {
        letter = first[i];
        for (j = 1; j < strs.length; j++) {
            if (strs[j][i] !== letter) {
                break k;
            }
        }
        result += letter
    }
    return result;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix([""]))