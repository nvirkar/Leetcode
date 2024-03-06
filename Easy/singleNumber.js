/**
 * Leetcode-136
 * Single Number
 * https://leetcode.com/problems/single-number/
 * #Hashtable
 * #Bit Manipulation
 */

/**
 * Brute force dictionary approach
 */

var singleNumberBrute = function (nums) {
    let numsLength = nums.length;
    if(numsLength == 1){
        return nums[0]
    }

    let dict = {}

    for(let i=0;i<numsLength;i++){
        if (!(nums[i] in dict)) {
            dict[nums[i]] = 1
        }else{
            delete dict[nums[i]]
        }
    }
    return Object.keys(dict)[0]
};

/**
 * Bitwise operations
 * using ex-or operator
 * n^n =0 && n^0 = n
 */


var singleNumber = function (nums) {
    let res;

    for(let num of nums){
       res = res ^ num
    }

    return res
};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))

console.log(singleNumberBrute([2, 2, 1]))
console.log(singleNumberBrute([4, 1, 2, 1, 2]))
console.log(singleNumberBrute([1]))
