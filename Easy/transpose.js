/**
 * Leetcode-867
 * Transpose Matrix
 * https://leetcode.com/problems/transpose-matrix/  
 */

var transpose = function (matrix) {
    let newMatrix = []

    for (let row = 0; row < matrix[0].length; row++) {
        let rowData = []
        for (let col = 0; col < matrix.length; col++) {
            rowData.push(matrix[col][row])
        }
        newMatrix.push(rowData)
    }
    return newMatrix
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
