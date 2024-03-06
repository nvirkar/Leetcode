/**
 * Leetcode-344
 * Reverse String
 * https://leetcode.com/problems/reverse-string/
 * #Array
 */

var reverseString = function (s) {
  let sLength = s.length;
  let halfLength = Math.floor(sLength/2)

  for(let i=0; i< halfLength;i++){
    let j = sLength - 1 - i ;
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
