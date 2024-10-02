/**
 * Leetcode-3019
 * Number of Changing Keys
 * https://leetcode.com/problems/number-of-changing-keys/
 * #String
 */

var countKeyChanges = function (s) {
  s = s.toLowerCase();
  count = 0;
  key = s[0];
  sLength = s.length;
  for (i = 0; i < sLength; i++) {
    if (s[i] != key) {
      count++;
      key = s[i];
    }
  }
  return count;
};

console.log(countKeyChanges("aAbBcC"));
console.log(countKeyChanges("AaAaAaaA"));
