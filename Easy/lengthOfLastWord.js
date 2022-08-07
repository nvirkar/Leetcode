/**
 * Leetcode-58
 * Length of Last Word
 */

var lengthOfLastWord = function (s) {
    s = s.trim();
    strArr = s.split(" ");
    lastWord = strArr[strArr.length - 1]
    return lastWord.length
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

