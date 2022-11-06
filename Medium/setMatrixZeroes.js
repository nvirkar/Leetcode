/**
 * Leetcode-73
 * Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/s
 */

var setZeroes = function (matrix) {
    zeroes = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                zeroes.push([i, j])
            }
        }
    }

    rows = [...new Set(zeroes.map((el) => el[0]))]
    cols = [...new Set(zeroes.map((el) => el[1]))]

    // modify rows
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[rows[i]][j] != 0) {
                matrix[rows[i]][j] = 0
            }
        }
    }

    // modify cols
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < cols.length; j++) {
            if (matrix[i][cols[j]] != 0) {
                matrix[i][cols[j]] = 0
            }
        }
    }

    return matrix
};


// console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));


