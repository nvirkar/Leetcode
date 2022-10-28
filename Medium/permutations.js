/**
 * Leetcode-46
 * Permutations
 * https://leetcode.com/problems/permutations/
 */

var getPermutations = function (p, up) {
    if (up.length == 0) {
        // console.log(p)
        res.push(p)
        return
    }

    let ch = up.slice(0, 1)

    for (let i = 0; i <= p.length; i++) {
        let f = p.slice(0, i)
        let s = p.slice(i, p.length)
        getPermutations([...f, ...ch, ...s], up.slice(1))
    }
}

var permute = function (nums) {
    res = []
    getPermutations([], nums)
    return res
};

console.log(permute([1, 2, 3]))
console.log(permute([0, 1]))