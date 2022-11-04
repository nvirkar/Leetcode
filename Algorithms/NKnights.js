var main = function () {
    let n = 3
    let board = new Array(n).fill(0).map(() => new Array(n).fill(0))
    knight(board, 0, 0, 3)
}

var knight = function (board, row, col, knights) {
    if (knights == 0) {
        display(board);
        console.log();
        return
    }

    if (row == board.length - 1 && col == board[0].length) {
        return
    }

    if (col == board[0].length) {
        knight(board, row + 1, 0, knights)
        return
    }

    if (isSafe(board, row, col)) {
        board[row][col] = 1
        knight(board, row, col + 1, knights - 1)
        board[row][col] = 0
    }
    knight(board, row, col + 1, knights)

}


var isSafe = function (board, row, col) {
    if (isValid(board, row - 2, col + 1)) {
        if (board[row - 2][col + 1]) {
            return false
        }
    }
    if (isValid(board, row - 2, col - 1)) {
        if (board[row - 2][col - 1]) {
            return false
        }
    }
    if (isValid(board, row - 1, col + 2)) {
        if (board[row - 1][col + 2]) {
            return false
        }
    }
    if (isValid(board, row - 1, col - 2)) {
        if (board[row - 1][col - 2]) {
            return false
        }
    }
    return true
}

var isValid = function (board, row, col) {
    if (row >= 0 && row < board.length && col >= 0 && col < board[0].length) {
        return true
    }
    return false
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


main()