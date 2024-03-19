/**
 * Leetcode-2427
 * Number of Common Factors
 * https://leetcode.com/problems/number-of-common-factors/
 * #Array
 */

var isFactor= function(n,i) {
    return (n % i) == 0
}
var commonFactors = function (a, b) {
    count =0;
    for(let i=0;i<= Math.max(a,b);i++){
        if(isFactor(a,i) && isFactor(b,i)){
            count++
        }
    }
    return count
};

console.log(commonFactors(12, 6))
console.log(commonFactors(25, 30))
console.log(commonFactors(885,885))
