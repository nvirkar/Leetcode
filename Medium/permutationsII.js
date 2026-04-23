/**
 * Leetcode-47
 * Permutations II
 * https://leetcode.com/problems/permutations-ii/
 * #Recursion
 */

var getPermutations = function (up, p) {
  if (p.length == 0) {
    res.push(up);
    return;
  }

  let el = p[0];

  for (let i = 0; i <= up.length; i++) {
    let f = up.slice(0, i);
    let s = up.slice(i, up.length);
    getPermutations([...f, el, ...s], p.slice(1));
  }
};

var permuteUnique = function (nums) {
  res = [];
  getPermutations([], nums);
  return [...new Set(res.map(JSON.stringify))].map(JSON.parse);
};

console.log(permuteUnique([1, 1, 2]));
