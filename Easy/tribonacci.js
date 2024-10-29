/**
 * Leetcode-1137
 * N-th Tribonacci Number
 * https://leetcode.com/problems/n-th-tribonacci-number/
 * #Array
 */

var tribonacci = function (n) {
  arr = [0, 1, 1];
  if (n < 3) {
    return arr[n];
  } else {
    for (let i = 3; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    return arr[n];
  }
};

console.log(tribonacci(4));
console.log(tribonacci(25));
