/**
 * Leetcode-2614
 * Prime In Diagonal
 * https://leetcode.com/problems/prime-in-diagonal/description/
 * #Array
 */

var diagonalPrime = function (nums) {
  res = 0;
  rowMax = nums.length;
  colMax = nums[0].length;
  diagonalArr = [];
  max = -1;
  for (row = 0; row < rowMax; row++) {
    for (col = 0; col < colMax; col++) {
      if (row == col || row + col == rowMax - 1) {
        cell = nums[row][col];
        diagonalArr.push(cell);
        max = Math.max(max, cell);
      }
    }
  }

  prime = [false, false];
  for (let i = 2; i <= max; i++) {
    prime.push(true);
  }
  for (let i = 2; i * i <= max; i++) {
    for (let j = 2; i * j <= max; j++) {
      if (prime[i * j]) {
        prime[i * j] = false;
      }
    }
  }

  for (let i = 0; i < diagonalArr.length; i++) {
    if (prime[diagonalArr[i]]) {
      res = Math.max(res, diagonalArr[i]);
    }
  }
  return res;
  console.log(diagonalArr, max, prime);
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
