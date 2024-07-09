/**
 * Leetcode-58
 * Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 */

var lengthOfLastWord = function (s) {
  arr = s.trim().split(" ");
  last = arr[arr.length - 1];
  return last.length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
