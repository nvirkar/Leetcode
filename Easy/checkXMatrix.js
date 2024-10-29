/**
 * Leetcode-2319
 * Check if Matrix Is X-Matrix
 * https://leetcode.com/problems/check-if-matrix-is-x-matrix/
 * #Array
 */

var checkXMatrix = function (matrix) {
  maxRows = matrix.length;
  for (let row = 0; row < maxRows; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      cell = matrix[row][col];
      if (row == col || row + col + 1 == maxRows) {
        if (cell == 0) {
          return false;
        }
      } else {
        if (cell != 0) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  checkXMatrix([
    [2, 0, 0, 1],
    [0, 3, 1, 0],
    [0, 5, 2, 0],
    [4, 0, 0, 2],
  ])
);
console.log(
  checkXMatrix([
    [5, 7, 0],
    [0, 3, 1],
    [0, 5, 0],
  ])
);
