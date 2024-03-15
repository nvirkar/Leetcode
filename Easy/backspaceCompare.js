/**
 * Leetcode-844
 * Backspace String Compare
 * https://leetcode.com/problems/backspace-string-compare/
 * #Stack
 */

var backspaceCompare = function (s, t) {
  sStack = [];
  tStack = [];
  for (letter of s) {
    if (letter == "#") {
      sStack.pop();
    } else {
      sStack.push(letter);
    }
  }

  for (letter of t) {
    if (letter == "#") {
      tStack.pop();
    } else {
      tStack.push(letter);
    }
  }

  sStackLength = sStack.length;
  tStacklength = tStack.length;

  if (sStackLength != tStacklength) {
    return false;
  }

  for (let i = 0; i < sStackLength; i++) {
    if (sStack[i] != tStack[i]) {
      return false;
    }
  }
  return true;
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("aaa###a", "aaaa###a"));
