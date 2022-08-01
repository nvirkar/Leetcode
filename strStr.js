/**
 * Leetcode-28
 * Implement strStr
 */

var strStr = function (haystack, needle) {
    needleLength = needle.length;
    haystackLength = haystack.length;
    if (needleLength == 0) {
        return 0
    }
    for (i = 0; i < haystackLength; i++) {
        if (haystack[i] == needle[0]) {
            j = i;
            k = 0;
            l = i;
            while (haystack[j] == needle[k] && k < needleLength) {
                j++;
                k++;
            }
            if (k == needleLength) {
                return l
            }
        }
    }
    return -1
};


console.log(strStr("mississippi", "issip"))
console.log(strStr("a", "a"))
console.log(strStr("hello", "ll"))
console.log(strStr("aaaaa", "bba"))
