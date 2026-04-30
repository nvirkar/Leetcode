/**
 * Leetcode-2293
 * Min Max Game
 * https://leetcode.com/problems/min-max-game/
 * #Recursion
 */

var minMaxGame = function (nums) {
  let n = nums.length;

  if (n == 1) {
    return nums[0];
  }
  let newNums = [];
  for (let i = 0; i < Math.floor(n / 2); i++) {
    newNums[i] =
      i % 2 == 0
        ? Math.min(nums[2 * i], nums[2 * i + 1])
        : Math.max(nums[2 * i], nums[2 * i + 1]);
  }

  return minMaxGame(newNums);
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]));
console.log(minMaxGame([3]));
