/**
 * Leetcode-441
 * Arranging Coins
 * https://leetcode.com/problems/arranging-coins/
 */

var arrangeCoins = function (n) {
  level = 1;
  row = 0;
  while (n >= level) {
    row++;
    n = n - level;
    level++;
  }
  return row;
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
