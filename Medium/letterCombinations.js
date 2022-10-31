/**
 * Leetcode-17
 * Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */


getLetterCombinations = function (p, up) {
    if (up == "") {
        res.push(p)
        return
    }
    let digit = parseInt(up.charAt(0))
    let data = charArray[digit]
    for (let i = 0; i < data.length; i++) {
        getLetterCombinations(p + data[i], up.substring(1))
    }
}

var letterCombinations = function (digits) {
    charArray = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" }
    res = []
    getLetterCombinations("", digits);
    res = res.filter((el) => el != "")
    return res;
};

console.log(letterCombinations("23"))
console.log(letterCombinations(""))
console.log(letterCombinations("2"))
