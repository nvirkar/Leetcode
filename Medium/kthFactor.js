/**
 * Leetcode-1492
 * The kth Factor of n
 * https://leetcode.com/problems/the-kth-factor-of-n/
 */

var kthFactor = function (n, k) {
    res = []
    desc = []
    ans = k - 1
    for (i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            fact1 = i
            fact2 = Math.floor(n / i)
            res.push(fact1)
            if (fact1 != fact2) {
                desc.push(fact2)
            }
        }
    }
    for (let i = desc.length - 1; i >= 0; i--) {
        res.push(desc[i])
    }
    return res[ans] ? res[ans] : -1
};

console.log(kthFactor(12, 3));
console.log(kthFactor(7, 2));
console.log(kthFactor(4, 4));
