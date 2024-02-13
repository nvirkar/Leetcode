/**
 * Leetcode-14
 * Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * #String
 */

var longestCommonPrefix = function(strs) {
    let result = "";
    let first = strs[0];
    let strsLength = strs.length;
    let firstLength = first.length;

    for(let i=0;i<firstLength;i++){
        letter = first[i];
        count = 0;
        for(let j=0;j<strsLength;j++){
            if(letter == strs[j][i])
            count++
        }
        if(count == strsLength){
            result += letter;
        }else{
            return result
        }
    }
    
    return result
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix([""]))