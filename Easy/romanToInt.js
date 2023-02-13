/**
 * Leetcode-13
 * Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 */

var romanToInt = function (s) {
  let count = 0;
  let num = s.split("");
  let dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (let i = 0; i < num.length; i++) {
    let current = dict[num[i]];
    let next = dict[num[i + 1]];
    if (current < next) {
      count = count + next - current;
      i++;
    } else {
      count = count + current;
    }
  }
  return count;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
