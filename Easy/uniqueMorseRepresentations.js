/**
 * Leetcode-804
 * Unique Morse Code Words
 * https://leetcode.com/problems/unique-morse-code-words/
 */


var uniqueMorseRepresentations = function (words) {
    res = []
    morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    for (let i = 0; i < words.length; i++) {
        morseWord = ""
        for (let j = 0; j < words[i].length; j++) {
            morseWord += morse[words[i].charCodeAt(j) - 97]
        }
        if (!res.includes(morseWord)) {
            res.push(morseWord)
        }
    }
    return res.length;
};


console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
console.log(uniqueMorseRepresentations(["a"]))