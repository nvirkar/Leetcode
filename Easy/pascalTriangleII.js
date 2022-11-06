/**
 * Leetcode-119
 * Pascal's Triangle II
 * https://leetcode.com/problems/pascals-triangle-ii/
 */

// nCr = n! / (r! * (n - r)!)


var getRow = function (rowIndex) {
    fact = [1]
    for (let i = 1; i <= rowIndex; i++) {
        fact[i] = i * fact[i - 1]
    }
    let res = []
    for (let r = 0; r <= rowIndex; r++) {
        let el = fact[rowIndex] / ((fact[rowIndex - r]) * fact[r])
        res.push(el)
    }
    return res
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
