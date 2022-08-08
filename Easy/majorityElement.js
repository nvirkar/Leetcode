/**
 * Leetcode-169
 * Majority Element
 */

var majorityElement = function (nums) {
    numsLength = nums.length;
    ceiling = Math.floor(numsLength / 2)
    dict = {}
    for (i = 0; i < numsLength; i++) {
        if (!(nums[i] in dict)) {
            dict[nums[i]] = 1
        } else {
            dict[nums[i]]++

        }
        if (dict[nums[i]] > ceiling) {
            return nums[i]
        }
    }
};

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([1]))

