/**
 * Leetcode-17
 * Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * #Recursion
 */

getLetterCombinations = function (up, p) {
  if (p == "") {
    res.push(up);
    return;
  }

  let first = dict[p.charAt(0)];

  for (let i = 0; i < first.length; i++) {
    getLetterCombinations(up + first[i], p.substring(1));
  }
};

letterCombinations = function (digits) {
  res = [];

  dict = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  getLetterCombinations("", digits);
  return res;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
