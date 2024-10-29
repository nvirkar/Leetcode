/**
 * Leetcode-342
 * Power of Four
 * https://leetcode.com/problems/power-of-four/
 * #Math
 */

var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }
  binaryString = n.toString(4);
  binaryLength = binaryString.length;
  oneCount = binaryString.split("").filter((e) => e == "1").length;
  zeroCount = binaryString.split("").filter((e) => e == "0").length;
  return oneCount == 1 && binaryLength == oneCount + zeroCount;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));
