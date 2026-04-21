/**
 * Leetcode-90
 * Subsets II
 * https://leetcode.com/problems/subsets-ii/
 * #Recursion
 */

// iterative
// var subsetsWithDup = function (nums) {
//     nums.sort()
//     let res = [[]]
//     start = 0;
//     end = 0;
//     for (i = 0; i < nums.length; i++) {
//         start = 0;
//         if (i > 0 && nums[i] == nums[i - 1]) {
//             start = end + 1;
//         }
//         end = res.length - 1
//         let newRes = JSON.parse(JSON.stringify(res)).slice(start)
//         for (j = 0; j < newRes.length; j++) {
//             newRes[j].push(nums[i]);
//         }
//         res.push(...newRes)
//     }
//     return res
// };

// recursive
var subsetsWithDup = function (nums) {
  nums.sort();
  res = [];
  getSubsets([], nums);
  return [...new Set(res.map(JSON.stringify))].map(JSON.parse);
};

var getSubsets = function (unprocessed, processed) {
  if (processed.length == 0) {
    res.push(unprocessed);
    return;
  }

  el = processed[0];

  getSubsets([...unprocessed, el], processed.slice(1));
  getSubsets([...unprocessed], processed.slice(1));
};

console.log(subsetsWithDup([4, 4, 4, 1, 4]));
console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
