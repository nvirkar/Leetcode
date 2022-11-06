/**
 * Leetcode-118
 * Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 */

// nCr = n! / (r! * (n - r)!)


var generate = function (numRows) {
    fact = [1]
    for (let i = 1; i <= numRows; i++) {
        fact[i] = i * fact[i - 1]
    }
    let res = []
    for (let n = 0; n < numRows; n++) {
        let row = []
        for (let r = 0; r <= n; r++) {
            let number = fact[n] / ((fact[r]) * fact[n - r])
            row.push(number)
        }
        res.push(row)
    }

    return res
};


console.log(generate(5));
console.log(generate(1));
