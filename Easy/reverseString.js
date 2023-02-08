/**
 * Leetcode-344
 * Reverse String
 * https://leetcode.com/problems/reverse-string/
 */

var reverseString = function (s) {
  let length = s.length;
  for (let i = 0, j = length - 1; i < Math.floor(length / 2); i++, j--) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
