/**
 * Leetcode-345
 * Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 * #Arrays
 */

var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u"];
  sArray = s.split("");
  sArrayLength = sArray.length;
  stack = [];

  for (let i = 0; i < sArrayLength; i++) {
    if (vowels.includes(sArray[i].toLowerCase())) {
      stack.push(sArray[i]);
    }
  }

  for (let i = 0; i < sArrayLength; i++) {
    if (vowels.includes(sArray[i].toLowerCase())) {
      sArray[i] = stack.pop();
    }
  }
  return sArray.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("aA"));
