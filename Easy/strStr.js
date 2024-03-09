/**
 * Leetcode-28
 * Implement strStr
 * https://leetcode.com/problems/implement-strstr/
 * #Two Pointers
 */

var strStr = function (haystack, needle) {
  let haystackLength = haystack.length;
  let needleLength = needle.length;

  for (let i = 0; i < haystackLength; i++) {
    if (haystack[i] == needle[0]) {
      let j = i;
      let k = 0;
      let count = 0;
      while (haystack[j] && haystack[j] == needle[k]) {
        j++;
        k++;
        count++;
      }
      if (count == needleLength) {
        return i;
      }
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("a", "a"));
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
