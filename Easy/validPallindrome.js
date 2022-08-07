/**
 * Leetcode-125
 * Valid Pallindrome
 */

var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    reverse = s.split("").reverse().join("")
    return s === reverse;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
console.log(isPalindrome("0P"))

