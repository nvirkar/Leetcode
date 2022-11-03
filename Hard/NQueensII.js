/**
 * Leetcode-52
 * N-Queens II
 * https://leetcode.com/problems/n-queens-ii/
 */

var totalNQueens = function (n) {
    let board = new Array(n).fill(0).map(() => new Array(n).fill(0))
    count = queens(board, 0)
    return count
};

var isSafe = function (board, row, col) {
    // check in same col
    for (let i = 0; i <= row; i++) {
        if (board[i][col]) {
            return false
        }
    }

    // check in left diagonal
    let maxLeft = Math.min(row, col)
    for (let i = 0; i <= maxLeft; i++) {
        if (board[row - i][col - i]) {
            return false
        }
    }

    let maxRight = Math.min(row, board[0].length - 1 - col)
    for (let i = 0; i <= maxRight; i++) {
        if (board[row - i][col + i]) {
            return false
        }
    }

    return true
}

var queens = function (board, row) {
    if (row == board.length) {
        display(board)
        console.log();
        return 1
    }
    let count = 0
    for (let col = 0; col < board[0].length; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 1
            count += queens(board, row + 1)
            board[row][col] = 0
        }
    }
    return count
}

var display = function (board) {

    for (let i = 0; i < board.length; i++) {
        colData = ""
        for (let j = 0; j < board[0].length; j++) {
            colData += board[i][j] + " "
        }
        console.log(colData)
    }
}

console.log(totalNQueens(4));
console.log();
console.log(totalNQueens(1));
