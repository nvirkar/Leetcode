/**
 * Leetcode-51
 * N-Queens
 * https://leetcode.com/problems/n-queens/
 */

var solveNQueens = function (n) {
    let board = new Array(n).fill(0).map(() => new Array(n).fill(0))
    result = []
    queens(board, 0)
    return result
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
        addDataToResult(board)
        // display(board)
        // console.log();

    }
    for (let col = 0; col < board[0].length; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 1
            queens(board, row + 1)
            board[row][col] = 0
        }
    }
}

var addDataToResult = function (board) {
    arr = []
    for (let i = 0; i < board.length; i++) {
        colData = ""
        for (let j = 0; j < board[0].length; j++) {
            colData += board[i][j] + ""
        }

        colData = colData.replace(/0/g, ".").replace(/1/g, "Q")
        arr.push(colData)
        // console.log(colData)
    }
    result.push(arr)
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


console.log(solveNQueens(4));
console.log(solveNQueens(1));
