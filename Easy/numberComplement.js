/**
 * Leetcode-476
 * Number Complement
 * https://leetcode.com/problems/number-complement/description/
 * #Math
 */

var findComplement = function (num) {
  let binaryString = Number(num).toString(2);
  binaryString = binaryString.split("");
  let binaryStringLength = binaryString.length;
  for (let i = 0; i < binaryStringLength; i++) {
    if (parseInt(binaryString[i]) == 0) {
      binaryString[i] = 1;
    } else {
      binaryString[i] = 0;
    }
  }
  result = 0;
  power = 0;
  for (let i = binaryStringLength - 1; i > -1; i--) {
    result = result + binaryString[i] * Math.pow(2, power);
    power = power + 1;
  }
  return result;
};

console.log(findComplement(5));
console.log(findComplement(1));
