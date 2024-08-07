/**
 * Leetcode-1
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 * #Hashtable
 */

var twoSum = function (nums, target) {
    let dict = {}
    let numsLength = nums.length
    for (let i = 0; i < numsLength; i++) {
        if(nums[i] in dict){
            return [dict[nums[i]],i]
        }else{
            dict[target - nums[i]] = i
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
