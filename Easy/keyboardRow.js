/**
 * Leetcode-500
 * Keyboard Row
 * https://leetcode.com/problems/keyboard-row/
 */

var findWords = function (words) {
    res = []
    keyboardArr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    keyboardRow = ""
    for (let i = 0; i < words.length; i++) {
        for (let k = 0; k < keyboardArr.length; k++) {
            if (keyboardArr[k].toLowerCase().includes(words[i][0].toLowerCase())) {
                keyboardRow = keyboardArr[k]
                break;
            }
        }
        count = 0
        for (let j = 0; j < words[i].length; j++) {
            if (keyboardRow.toLowerCase().includes(words[i][j].toLowerCase())) {
                count++
            }
        }
        if (count == words[i].length) {
            res.push(words[i])
        }
    }
    return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))
console.log(findWords(["omk"]))
console.log(findWords(["adsdf", "sfd"]))

