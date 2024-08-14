/**
 * Leetcode-3019
 * Number of Changing Keys
 * https://leetcode.com/problems/number-of-changing-keys/
 * #String
 */

var countKeyChanges = function (s) {
  let count = 0;
  let sLength = s.length;
  let letter = s[0].toLowerCase();
  for (let i = 1; i < sLength; i++) {
    if (letter != s[i].toLowerCase()) {
      count = count + 1;
      letter = s[i].toLowerCase();
    }
  }
  return count;
};

console.log(countKeyChanges("aAbBcC"));
console.log(countKeyChanges("AaAaAaaA"));
