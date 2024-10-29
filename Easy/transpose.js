/**
 * Leetcode-867
 * Transpose Matrix
 * https://leetcode.com/problems/transpose-matrix/
 * #Array
 */

var transpose = function (matrix) {
  result = [];
  maxRows = matrix.length;
  maxCols = matrix[0].length;
  for (let col = 0; col < maxCols; col++) {
    rowData = [];
    for (let row = 0; row < maxRows; row++) {
      rowData.push(matrix[row][col]);
    }
    result.push(rowData);
  }
  return result;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
