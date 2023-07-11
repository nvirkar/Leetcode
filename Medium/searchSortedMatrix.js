/**
 * Leetcode-74
 * Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 * #BinarySearch
 */


// search in row between columns provided
var binarySearch = function (matrix, row, colStart, colEnd, target) {

    while (colStart <= colEnd) {
        mid = colStart + Math.floor((colEnd - colStart) / 2)

        if (matrix[row][mid] == target) {
            return true
        } else if (matrix[row][mid] > target) {
            colEnd = mid - 1
        } else {
            colStart = mid + 1
        }
    }
    return false
}

var getRow = function (matrix, target) {
    // get floor from first colum to identify row present
    col = 0;
    rStart = 0;
    rEnd = matrix.length - 1

    if (target <= matrix[0][0]) {
        return 0
    }

    while (rStart <= rEnd) {
        mid = rStart + Math.floor((rEnd - rStart) / 2)
        if (matrix[mid][col] == target) {
            return mid
        } else if (matrix[mid][col] > target) {
            rEnd = mid - 1
        } else {
            rStart = mid + 1
        }
    }
    return rEnd
}

var searchMatrix = function (matrix, target) {
    row = getRow(matrix, target)
    return binarySearch(matrix, row, 0, matrix[0].length - 1, target)
};

console.log(
    searchMatrix([[1]], 0))

console.log(
    searchMatrix(
        [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]], 8))

console.log(
    searchMatrix(
        [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]], 6))

console.log(
    searchMatrix(
        [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]], 89))


console.log(
    searchMatrix(
        [[1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]], 3))

console.log(
    searchMatrix([
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]], 13))

console.log(
    searchMatrix([
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60]], 34))