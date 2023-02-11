// Leetcode-345
// Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let letters = s.split("");
  let stringVowels = [];
  for (let i = 0; i < letters.length; i++) {
    if (vowels.includes(letters[i])) {
      stringVowels.push(letters[i]);
    }
  }
  for (let i = 0; i < letters.length; i++) {
    if (vowels.includes(letters[i])) {
      letters[i] = stringVowels.pop();
    }
  }
  return letters.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
