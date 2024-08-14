/**
 * Leetcode-389
 * Find the Difference
 * https://leetcode.com/problems/find-the-difference/
 * #Hashtable
 */
var findTheDifference = function (s, t) {
  let i = 0;
  while (t.length != 1) {
    t = t.replace(s[i], "");
    i++;
  }
  return t;
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));
console.log(findTheDifference("a", "aa"));
