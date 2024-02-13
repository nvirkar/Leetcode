/**
 * Leetcode-867
 * Transpose Matrix
 * https://leetcode.com/problems/transpose-matrix/  
 * Array
 */

var transpose = function (matrix) {
    let newMatrix = []
    
    for(col= 0;col<matrix[0].length;col++){
        rowArr = []
        for(row =0 ; row <matrix.length;row++){
            rowArr.push(matrix[row][col])
        }
        newMatrix.push(rowArr)
    }
    return newMatrix
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
