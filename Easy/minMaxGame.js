/**
 * Leetcode-2293
 * Min Max Game
 * https://leetcode.com/problems/min-max-game/
 */

var minMaxGame = function (nums) {
    n = nums.length
    if (n == 1) {
        return nums[0]
    }
    let flag = true;
    let newArr = []
    for (i = 0; i < n; i += 2) {
        let el = flag ? Math.min(nums[i], nums[i + 1]) : Math.max(nums[i], nums[i + 1])
        newArr.push(el)
        flag = !flag
    }
    return minMaxGame(newArr)
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]));
console.log(minMaxGame([3]));
