/**
 * Leetcode-242
 * Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 */


var isAnagram = function (s, t) {
    sLength = s.length;
    tLength = t.length;
    if (sLength !== tLength) {
        return false
    }
    dict = {}
    for (i = 0; i < sLength; i++) {
        if (!(s[i] in dict)) {
            dict[s[i]] = 1
        } else {
            dict[s[i]]++
        }
    }
    for (i = 0; i < tLength; i++) {
        if (!(t[i] in dict)) {
            return false
        }
        if (dict[t[i]] == 0) {
            return false
        } else {
            dict[t[i]]--;
        }
    }
    return true
};



console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
