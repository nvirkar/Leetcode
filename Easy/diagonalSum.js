/**
 * Leetcode-1572
 * Matrix Diagonal Sum
 * https://leetcode.com/problems/matrix-diagonal-sum/
 */

var diagonalSum = function (grid) {
  count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i == j || (i + j == grid.length - 1 && i != j)) {
        count += grid[i][j];
      }
    }
  }
  return count;
};

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);

console.log(diagonalSum([[5]]));
