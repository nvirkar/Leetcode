/**
 * Leetcode-46
 * Permutations
 * https://leetcode.com/problems/permutations/
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

var permute = function (nums) {
  res = [];
  getPermutations([], nums);
  return res;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
