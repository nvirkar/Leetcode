/**
 * Leetcode-229
 * Majority Element II
 * https://leetcode.com/problems/majority-element-ii/
 */

var majorityElement = function(nums) {
    let numsLength = nums.length;
    let ceiling = Math.floor(numsLength/3)
    let dict = {};
    let res = []
    for(let i=0; i< numsLength;i++){
        if (!(nums[i] in dict)) {
            dict[nums[i]] = 1
        } else {
            dict[nums[i]]++
        }
        if (dict[nums[i]] > ceiling && !(res.includes(nums[i]))) {
            res.push(nums[i]);
        }
    }  
    return res;
};


console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([1]))
console.log(majorityElement([1, 2]))
console.log(majorityElement([2,2]))


