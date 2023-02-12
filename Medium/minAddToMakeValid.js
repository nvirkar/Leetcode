/**
 * Leetcode-921
 * Minimum Add to Make Parentheses Valid
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 */

var minAddToMakeValid = function (s) {
  stack = [];
  elem = s.split("");
  for (let i = 0; i < elem.length; i++) {
    if (elem[i] == "(") {
      stack.push(elem[i]);
    } else {
      if (stack.length != 0 && stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        stack.push(elem[i]);
      }
    }
  }
  return stack.length;
};

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("((("));
