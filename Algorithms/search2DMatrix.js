/**
 * Search in 2D matrix where rows & columns have increasing values
 */

var searchMatrix = function (matrix, target) {
    row = 0;
    col = matrix[row].length - 1

    while ((row < matrix.length) && (col >= 0)) {
        if (target == matrix[row][col]) {
            return [row, col]
        } else if (target < matrix[row][col]) {
            col--
        } else {
            row++
        }
    }
    return [-1, -1]
};


console.log(searchMatrix(
    [[10, 20, 30, 40],
    [15, 25, 35, 45],
    [28, 29, 37, 49],
    [33, 34, 38, 40]],
    49))

console.log(searchMatrix(
    [[10, 20, 30, 40],
    [15, 25, 35, 45],
    [28, 29, 37, 49],
    [33, 34, 38, 40]],
    17))
