/**
 * Leetcode-119
 * Pascal's Triangle II
 * https://leetcode.com/problems/pascals-triangle-ii/
 * #Array
 */

// nCr = n! / (r! * (n - r)!)

var getRow = function (rowIndex) {
  let fact = [1];
  let res = [];
  for (let i = 1; i <= rowIndex; i++) {
    fact[i] = i * fact[i - 1];
  }
  for (let j = 0; j <= rowIndex; j++) {
    value = fact[rowIndex] / (fact[j] * fact[rowIndex - j]);
    res.push(value);
  }

  return res;
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
