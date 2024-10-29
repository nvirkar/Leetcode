/**
 * Leetcode-3033
 * Modify the Matrix
 * https://leetcode.com/problems/modify-the-matrix/description/
 * #Array
 */

var modifiedMatrix = function (matrix) {
  colMax = [];
  maxRows = matrix.length;
  maxCols = matrix[0].length;

  for (let col = 0; col < maxCols; col++) {
    max = -2;
    for (let row = 0; row < maxRows; row++) {
      max = Math.max(max, matrix[row][col]);
    }
    colMax.push(max);
  }

  answer = [];
  for (let row = 0; row < maxRows; row++) {
    rowData = [];
    for (let col = 0; col < maxCols; col++) {
      if (matrix[row][col] == -1) {
        rowData.push(colMax[col]);
      } else {
        rowData.push(matrix[row][col]);
      }
    }
    answer.push(rowData);
  }

  return answer;
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
