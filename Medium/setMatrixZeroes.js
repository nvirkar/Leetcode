/**
 * Leetcode-73
 * Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/s
 * #Array
 */

var setZeroes = function (matrix) {
  row = [];
  col = [];

  maxRows = matrix.length;
  maxCols = matrix[0].length;
  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxCols; j++) {
      if (matrix[i][j] == 0) {
        if (!row.includes(i)) {
          row.push(i);
        }
        if (!col.includes(j)) {
          col.push(j);
        }
      }
    }
  }

  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxCols; j++) {
      if (row.includes(i) || col.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
