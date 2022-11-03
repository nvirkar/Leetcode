/**
 * Leetcode-1137
 * N-th Tribonacci Number
 * https://leetcode.com/problems/n-th-tribonacci-number/
 */

var tribonacci = function (n) {
    let arr = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3]
    }
    // console.log(arr);
    return arr[n]
};

console.log(tribonacci(4));
console.log(tribonacci(25));
