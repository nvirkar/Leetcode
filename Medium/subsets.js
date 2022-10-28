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

var subsets = function (nums) {
    res = []
    getSubsets(nums, [])
    return res
};

console.log(subsets([1, 2, 3]))
console.log(subsets([0]))