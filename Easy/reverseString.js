/**
 * Leetcode-344
 * Reverse String
 * https://leetcode.com/problems/reverse-string/
 * #Array
 */

var reverseString = function (s) {
  let sLength = s.length;
  let limit = Math.floor(sLength / 2);
  for (let i = 0; i < limit; i++) {
    temp = s[i];
    s[i] = s[sLength - 1 - i];
    s[sLength - 1 - i] = temp;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
