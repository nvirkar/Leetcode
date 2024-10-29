/**
 * Leetcode-500
 * Keyboard Row
 * https://leetcode.com/problems/keyboard-row/
 * #Array
 */

var findWords = function (words) {
  let res = [];
  let keyboardRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let keyboardRowsLength = keyboardRows.length;
  let wordsLength = words.length;
  for (let i = 0; i < wordsLength; i++) {
    let word = words[i];
    let wordLength = word.length;
    let count = 0;
    let row = "";
    for (let i = 0; i < keyboardRowsLength; i++) {
      if (keyboardRows[i].includes(word[0].toLowerCase())) {
        row = keyboardRows[i];
        break;
      }
    }
    for (let i = 0; i < wordLength; i++) {
      if (row.includes(word[i].toLowerCase())) {
        count++;
      } else {
        break;
      }
    }
    if (wordLength == count) {
      res.push(word);
    }
  }
  return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf", "sfd"]));
