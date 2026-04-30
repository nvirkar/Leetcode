/**
 * Leetcode-921
 * Minimum Add to Make Parentheses Valid
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * #Stack
 */

var minAddToMakeValid = function (s) {
  stack = [];
  sLength = s.length;

  for (let i = 0; i < sLength; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
    } else {
      if (stack.length != 0 && stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.length;
};

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("((("));
