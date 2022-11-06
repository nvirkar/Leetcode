/**
 * Leetcode-844
 * Backspace String Compare
 * https://leetcode.com/problems/backspace-string-compare/
 */

var backspaceCompare = function (s, t) {
  sArr = s.split("");
  tArr = t.split("");
  firstArr = [];
  secondArr = [];
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] == "#") {
      firstArr.pop();
    } else {
      firstArr.push(sArr[i]);
    }
  }

  for (let i = 0; i < tArr.length; i++) {
    if (tArr[i] == "#") {
      secondArr.pop();
    } else {
      secondArr.push(tArr[i]);
    }
  }
  first = firstArr.join("");
  second = secondArr.join("");
  return first == second;
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
