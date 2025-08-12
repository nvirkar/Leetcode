/**
 * Leetcode-58
 * Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 */

var lengthOfLastWord = function (s) {
  s = s.trim();
  sArr = s.split(" ");
  return sArr[sArr.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
