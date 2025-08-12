/**
 * Leetcode-1572
 * Matrix Diagonal Sum
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * Array
 */

var diagonalSum = function (mat) {
  sum = 0;
  rowMax = mat.length;
  colMax = mat[0].length;
  for (row = 0; row < rowMax; row++) {
    for (col = 0; col < colMax; col++) {
      if (row == col || row + col == rowMax - 1) {
        sum = sum + mat[row][col];
      }
    }
  }
  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);

console.log(diagonalSum([[5]]));
