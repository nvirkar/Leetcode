/**
 * Leetcode-36
 * Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/
 */

var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] != ".") {
                let res = isNumValid(board, i, j, board[i][j])
                if (res == false) {
                    return false
                }
            }
        }
    }

    return true
};

var isNumValid = function (board, row, col, num) {
    // check in col
    let colCount = 0
    for (let row = 0; row < board.length; row++) {
        if (board[row][col] == num) {
            colCount++
        }
    }
    if (colCount != 1) {
        return false
    }

    // check in row
    let rowCount = 0
    for (let col = 0; col < board[0].length; col++) {
        if (board[row][col] == num) {
            rowCount++
        }
    }
    if (rowCount != 1) {
        return false
    }

    //check in grid
    let gridCount = 0
    let rowStart = row - row % 3
    let colStart = col - col % 3
    for (let i = rowStart; i < rowStart + 3; i++) {
        for (let j = colStart; j < colStart + 3; j++) {
            if (board[i][j] == num) {
                gridCount++
            }
        }
    }
    if (gridCount != 1) {
        return false
    }

    return true
}


console.log(isValidSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));

console.log(isValidSudoku(
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));

