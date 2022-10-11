
// search in row between columns provided
var binarySearch = function (matrix, row, colStart, colEnd, target) {
    while (colStart <= colEnd) {
        mid = colStart + Math.floor((colEnd - colStart) / 2)
        if (matrix[row][mid] == target) {
            return [row, mid]
        } else if (matrix[row][mid] < target) {
            colStart = mid + 1
        } else {
            colEnd = mid - 1
        }
    }
    return [-1, -1]
}


var searchMatrix = function (matrix, target) {
    row = matrix.length;
    col = matrix[0].length;

    if (row == 1) {
        return binarySearch(matrix, 0, 0, col - 1, target)
    }

    rStart = 0
    rEnd = row - 1

    cMid = Math.floor(col / 2)
    //run loop till 2 rows are remaining
    while (rStart < rEnd - 1) {
        mid = rStart + Math.floor((rEnd - rStart) / 2)
        if (matrix[mid][cMid] == target) {
            return [mid, cMid]
        }
        else if (matrix[mid][cMid] < target) {
            rStart = mid
        } else {
            rEnd = mid
        }
    }

    first = binarySearch(matrix, rStart, 0, col - 1, target)
    if (first.toString() == '-1,-1') {
        return binarySearch(matrix, rEnd, 0, col - 1, target)
    } else {
        return first
    }
};


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

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],
    13))