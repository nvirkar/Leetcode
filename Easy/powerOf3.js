/**
 * Leetcode-326
 * Power of Three
 * https://leetcode.com/problems/power-of-three/
 * #Math
 */

var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  }
  binaryString = n.toString(3);
  binaryLength = binaryString.length;
  oneCount = binaryString.split("").filter((e) => e == "1").length;
  zeroCount = binaryString.split("").filter((e) => e == "0").length;
  return oneCount == 1 && binaryLength == oneCount + zeroCount;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
console.log(isPowerOfThree(-27));
console.log(isPowerOfThree(19684));
console.log(isPowerOfThree(45));
