/**
 * Leetcode-345
 * Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 * #Arrays
 */


var reverseVowels = function(s) {
  let vowels = ['a','e','i','o','u']
  let letters = s.split("")
  let lettersLength = letters.length;
  let stack = []
  
  for(let i=0;i<lettersLength;i++ ){
    if(vowels.includes(letters[i].toLowerCase())){
      stack.push(letters[i])
    }
  }

  for(let i=0;i<lettersLength;i++ ){
    if(vowels.includes(letters[i].toLowerCase())){
     letters[i] =  stack.pop();
    }
  }

  return letters.join("")

};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("aA"));

