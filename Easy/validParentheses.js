/**
 * Leetcode-20
 * Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * #Stack
 */

var isValid = function (s) {
  let dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in dict)) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (top != dict[s[i]]) {
        return false;
      }
    }
  }

  return stack.length == 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
