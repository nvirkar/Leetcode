/**
 * Leetcode-125
 * Valid Pallindrome
 * https://leetcode.com/problems/valid-palindrome/
 * #String
 */

var isPalindrome = function (s) {
    s = s.replace(/[^A-Z0-9]/gmi,"").toLowerCase();
    let sLength = s.length;
    let halfLength =  Math.floor(sLength/2)
    for(let i=0;i< halfLength;i++){
        j = sLength-i-1;
        if(s[i] != s[j]){
            return false;
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
console.log(isPalindrome("0P"))

