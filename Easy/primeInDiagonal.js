/**
 * Leetcode-2614
 * Prime In Diagonal
 * https://leetcode.com/problems/prime-in-diagonal/description/
 * #Array
 */

var diagonalPrime = function (nums) {
  let digonalData = [];
  let max = 0;
  for (let row = 0; row < nums.length; row++) {
    for (let col = 0; col < nums[0].length; col++) {
      if (nums.length - 1 == row + col || row == col) {
        number = nums[row][col];
        digonalData.push(number);
        max = Math.max(max, number);
      }
    }
  }
  arr = [false, false];
  let primeDiagonalMax = 0;
  for (let i = 2; i <= max; i++) {
    arr.push(true);
  }
  for (let i = 2; i < max; i++) {
    if (arr[i]) {
      for (let j = 2; i * j <= max; j++) {
        if (arr[i * j]) {
          arr[i * j] = false;
        }
      }
    }
  }
  for (let i = 0; i < digonalData.length; i++) {
    if (arr[digonalData[i]]) {
      primeDiagonalMax = Math.max(primeDiagonalMax, digonalData[i]);
    }
  }
  return primeDiagonalMax;
};

console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 6, 7],
    [9, 10, 11],
  ])
);
console.log(
  diagonalPrime([
    [1, 2, 3],
    [5, 17, 7],
    [9, 11, 10],
  ])
);
