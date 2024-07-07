/**
 * Leetcode-118
 * Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * #Arary
 */

// nCr = n! / (r! * (n - r)!)

var generate = function (numRows) {
  let fact = [1];
  let res = [];
  for (let i = 1; i <= numRows; i++) {
    fact[i] = i * fact[i - 1];
  }

  for (let i = 0; i < numRows; i++) {
    tempArr = [];
    for (let j = 0; j <= i; j++) {
      value = fact[i] / (fact[j] * fact[i - j]);
      tempArr.push(value);
    }
    res.push(tempArr);
  }
  return res;
};
console.log(generate(5));
console.log(generate(1));
