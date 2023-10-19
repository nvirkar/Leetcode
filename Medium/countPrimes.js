/**
 * Leetcode-204
 * Count Primes
 * https://leetcode.com/problems/count-primes/
 * #Math
 */

var countPrimes = function (n) {
  let count = 0;
  let arr = [];
  if (n < 2) {
    return count;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = true;
  }

  for (let i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (let j = 2; i * j < n; j++) {
        if (arr[i * j]) {
          arr[i * j] = false;
        }
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      count++;
    }
  }
  return count;
};

console.log(countPrimes(0));
console.log(countPrimes(1));
console.log(countPrimes(2));
console.log(countPrimes(3));

console.log(countPrimes(10));
console.log(countPrimes(100));
console.log(countPrimes(956150));
console.log(countPrimes(5000000));
