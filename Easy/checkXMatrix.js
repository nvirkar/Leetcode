/**
 * Leetcode-2319
 * Check if Matrix Is X-Matrix
 * https://leetcode.com/problems/check-if-matrix-is-x-matrix/
 * #Array
 */

var checkXMatrix = function (grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      number = grid[row][col];
      if (grid.length - 1 == row + col || row == col) {
        if (number == 0) {
          return false;
        }
      } else {
        if (number != 0) {
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
