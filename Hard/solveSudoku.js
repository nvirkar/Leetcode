/**
 * Leetcode-37
 * Sudoku Solver
 * https://leetcode.com/problems/sudoku-solver/
 */

var solveSudoku = function (board) {
    if (solve(board)) {
        // display(board)
        return board
    } else {
        console.log("could not solve");
    }
};

var solve = function (board) {
    let n = board.length;
    let row = -1
    let col = -1
    let i
    let j

    let notEmpty = true;
    k:
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (board[i][j] == ".") {
                row = i;
                col = j;
                notEmpty = false
                break k;
            }
        }
    }
    // sudoku is solved
    if (notEmpty) {
        return true
    }

    for (let number = 1; number <= 9; number++) {
        let numStr = number.toString()
        if (isSafe(board, col, numStr, row)) {
            board[row][col] = numStr
            if (solve(board)) {
                return true
            }
            board[row][col] = "."
        }
    }

    return false
}



var isSafe = function (board, col, num, row) {
    // same col
    for (let row = 0; row < board.length; row++) {
        if (board[row][col] == num) {
            return false
        }
    }
    // same row
    for (let col = 0; col < board[0].length; col++) {
        if (board[row][col] == num) {
            return false
        }
    }
    // same grid
    let sqrt = Math.floor(Math.sqrt(board.length))
    let rowStart = row - row % sqrt
    let colStart = col - col % sqrt
    for (let i = rowStart; i < rowStart + 3; i++) {
        for (let j = colStart; j < colStart + 3; j++) {
            if (board[i][j] == num) {
                return false
            }
        }
    }

    return true
}

var display = function (board) {
    for (let i = 0; i < board.length; i++) {
        let colData = ""
        for (let j = 0; j < board[0].length; j++) {
            colData += board[i][j]
        }
        console.log(colData);
    }
}


console.log(solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));


