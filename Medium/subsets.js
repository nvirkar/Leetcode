/**
 * Leetcode-78
 * Subsets
 * https://leetcode.com/problems/subsets/
 * #Recursion
 */

// iterative solution
// var subsets = function (nums) {
//     let res = [[]]
//     for (const iterator of nums) {
//         let newRes = JSON.parse(JSON.stringify(res))
//         for (i = 0; i < res.length; i++) {
//             newRes[i].push(iterator);
//         }
//         res.push(...newRes)
//     }
//     return res
// };

// recursive
var subsets = function (nums) {
  res = [];
  getSubsets([], nums);
  return res;
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

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
