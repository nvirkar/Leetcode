/**
 * Leetcode-90
 * Subsets II
 * https://leetcode.com/problems/subsets-ii/
 */

var subsetsWithDup = function (nums) {
    nums.sort()
    res = []
    getSubsets(nums, [])
    return [...new Set(res.map(JSON.stringify))].map(JSON.parse)
};

var getSubsets = function (processed, unprocessed) {
    if (processed.length == 0) {
        res.push(unprocessed)
        return
    }
    el = processed[0];

    getSubsets(processed.slice(1), [...unprocessed, el])
    getSubsets(processed.slice(1), [...unprocessed])
}

console.log(subsetsWithDup([4, 4, 4, 1, 4]))
console.log(subsetsWithDup([1, 2, 2]))
console.log(subsetsWithDup([0]))