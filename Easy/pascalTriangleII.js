/**
 * Leetcode-119
 * Pascal's Triangle II
 * https://leetcode.com/problems/pascals-triangle-ii/
 * #Array
 */

// nCr = n! / (r! * (n - r)!)

var getRow = function (n) {
  fact = [1, 1];
  for (let i = 2; i <= n; i++) {
    fact[i] = i * fact[i - 1];
  }
  res = [];

  for (let i = 0; i <= n; i++) {
    num = fact[n] / (fact[i] * fact[n - i]);
    res.push(Math.round(num));
  }

  return res;
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(23));
