/**
 * Leetcode-78
 * Subsets
 * https://leetcode.com/problems/subsets/
 */


var getSubsets = function (processed, unprocessed) {
    if (processed.length == 0) {
        res.push(unprocessed)
        return
    }
    el = processed[0];

    getSubsets(processed.slice(1), [...unprocessed, el])
    getSubsets(processed.slice(1), [...unprocessed])


}

// recursive
// var subsets = function (nums) {
//     res = []
//     getSubsets(nums, [])
//     return res
// };

// iterative solution
var subsets = function (nums) {
    let res = [[]]
    for (const iterator of nums) {
        let newRes = JSON.parse(JSON.stringify(res))
        for (i = 0; i < res.length; i++) {
            newRes[i].push(iterator);
        }
        res.push(...newRes)
    }
    return res
};

console.log(subsets([1, 2, 3]))
console.log(subsets([0]))