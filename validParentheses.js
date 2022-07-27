/**
 * Leetcode-20
 * Valid Parentheses
 */

var isValid = function (x) {
    dict = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    stack = []
    for (let i = 0; i < x.length; i++) {
        if (!(x[i] in dict)) {
            stack.push(x[i])
        } else {
            if (stack.pop() !== dict[x[i]]) {
                return false
            }
        }
    }
    return stack.length == 0
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))

