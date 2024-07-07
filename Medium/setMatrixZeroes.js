/**
 * Leetcode-73
 * Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/s
 * #Array
 */

var setZeroes = function (matrix) {
  row = [];
  col = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        row.push(i);
        col.push(j);
      }
    }
  }

  row = [...new Set(row)];
  col = [...new Set(col)];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
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
