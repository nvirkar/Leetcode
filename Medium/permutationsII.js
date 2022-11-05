/**
 * Leetcode-47
 * Permutations II
 * https://leetcode.com/problems/permutations-ii/
 */


var getPermutations = function (p, up) {
    if (up.length == 0) {
        res.push(p)
        return
    }
    let el = up.slice(0, 1)
    for (let i = 0; i <= p.length; i++) {
        let first = p.slice(0, i)
        let last = p.slice(i, p.length)
        getPermutations([...first, ...el, ...last], up.slice(1))
    }
}


var permuteUnique = function (nums) {
    res = []
    getPermutations([], nums)
    res = Array.from(new Set(res.map(JSON.stringify)), JSON.parse)
    return res
};

console.log(permuteUnique([1, 1, 2]));