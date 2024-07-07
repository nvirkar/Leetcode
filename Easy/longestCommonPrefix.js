/**
 * Leetcode-14
 * Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * #String
 * #Array
 */

var longestCommonPrefix = function (strs) {
  let strLength = strs.length;
  let result = "";
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    letter = first[i];
    for (let j = 0; j < strLength; j++) {
      if (strs[j][i] != letter) {
        return result;
      }
    }
    result += letter;
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
