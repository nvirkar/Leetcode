/**
 * Leetcode-509
 * Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/
 */

var getFib = function (n) {
    if (n < 2) {
        return arr[n]
    } else {
        if (arr[n - 1]) {
            first = arr[n - 1]
        } else {
            first = getFib(n - 1)
            arr[n - 1] = first
        }
        if (arr[n - 2]) {
            second = arr[n - 2]
        } else {
            second = getFib(n - 2)
            arr[n - 2] = second
        }
        return first + second
    }
}

var fib = function (n) {
    arr = [0, 1]
    ans = getFib(n)
    return ans
};

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
