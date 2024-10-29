/**
 * Leetcode-389
 * Find the Difference
 * https://leetcode.com/problems/find-the-difference/
 * #Hashtable
 */
var findTheDifference = function (s, t) {
  dict = {};
  for (let i = 0; i < t.length; i++) {
    if (t[i] in dict) {
      dict[t[i]] = dict[t[i]] + 1;
    } else {
      dict[t[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] in dict) {
      if (dict[s[i]] == 1) {
        delete dict[s[i]];
      } else {
        dict[s[i]] = dict[s[i]] - 1;
      }
    }
  }
  return Object.keys(dict)[0];
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));
console.log(findTheDifference("a", "aa"));
