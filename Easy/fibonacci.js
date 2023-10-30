/**
 * Leetcode-509
 * Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/
 * Recursion
 * Memoization using array
 */

// var fib = function (n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// };

var fib = function (n) {
  arr = [0, 1, 1];
  for (i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
