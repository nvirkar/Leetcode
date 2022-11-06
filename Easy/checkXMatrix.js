/**
 * Leetcode-2319
 * Check if Matrix Is X-Matrix
 * https://leetcode.com/problems/check-if-matrix-is-x-matrix/
 */

var checkXMatrix = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i == j || (i + j) == grid.length - 1) {
                if (grid[i][j] == 0) {
                    return false
                }
            } else {
                if (grid[i][j] != 0) {
                    return false
                }
            }
        }
    }
    return true
};

console.log(checkXMatrix([[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]]));
console.log(checkXMatrix([[5, 7, 0], [0, 3, 1], [0, 5, 0]]));

