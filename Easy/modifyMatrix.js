/**
 * Leetcode-3033
 * Modify the Matrix
 * https://leetcode.com/problems/modify-the-matrix/description/
 * #Array
 */

var modifiedMatrix = function (matrix) {
  colMax = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let max = matrix[0][col];
    for (let row = 0; row < matrix.length; row++) {
      max = Math.max(max, matrix[row][col]);
    }
    colMax[col] = max;
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      number = matrix[row][col];
      if (number == -1) {
        matrix[row][col] = colMax[col];
      }
    }
  }
  return matrix;
};

console.log(
  modifiedMatrix([
    [1, 2, -1],
    [4, -1, 6],
    [7, 8, 9],
  ])
);
console.log(
  modifiedMatrix([
    [3, -1],
    [5, 2],
  ])
);
