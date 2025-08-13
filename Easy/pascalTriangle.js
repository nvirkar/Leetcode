/**
 * Leetcode-118
 * Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * #Arary
 */

// nCr = n! / (r! * (n - r)!)

var generate = function (n) {
  fact = [1, 1];
  for (let i = 2; i <= n; i++) {
    fact[i] = i * fact[i - 1];
  }
  res = [];
  for (let i = 0; i < n; i++) {
    tempArr = [];
    for (let j = 0; j <= i; j++) {
      num = fact[i] / (fact[j] * fact[i - j]);
      tempArr.push(Math.round(num));
    }
    res.push(tempArr);
  }

  return res;
};
console.log(generate(5));
console.log(generate(1));
console.log(generate(24));
