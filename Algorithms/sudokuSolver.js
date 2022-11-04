var main = function () {
    let board = [
        [3, 0, 6, 5, 0, 8, 4, 0, 0],
        [5, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 7, 0, 0, 0, 0, 3, 1],
        [0, 0, 3, 0, 1, 0, 0, 8, 0],
        [9, 0, 0, 8, 6, 3, 0, 0, 5],
        [0, 5, 0, 0, 9, 0, 6, 0, 0],
        [1, 3, 0, 0, 0, 0, 2, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 4],
        [0, 0, 5, 2, 0, 6, 3, 0, 0]
    ]

    if (solve(board)) {
        display(board)
    } else {
        console.log("Cant solve board");
    }
}

var solve = function (board) {
    let n = board.length;
    let row = -1
    let col = -1

    let emptyLeft = true;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 0) {
                row = i
                col = j
                emptyLeft = false
                break;
            }
        }
        // if you find empty element then break
        if (emptyLeft == false) {
            break;
        }
    }
    if (emptyLeft == true) {
        return true
        // sudoku is solved
    }

    for (let number = 1; number <= 9; number++) {
        if (isSafe(board, row, col, number)) {
            board[row][col] = number;
            if (solve(board)) {
                // found the ans
                // display(board)
                return true
            } else {
                board[row][col] = 0;

            }
        }
    }
    return false
}


var isSafe = function (board, row, col, num) {
    // check in same row
    for (let col = 0; col < board[0].length; col++) {
        if (board[row][col] == num) {
            return false
        }
    }
    // check in same col
    for (let row = 0; row < board.length; row++) {
        if (board[row][col] == num) {
            return false
        }
    }
    //check in same grid
    let sqrt = Math.floor(Math.sqrt(board.length))
    let startRow = row - row % sqrt;
    let startCol = col - col % sqrt
    for (let row = startRow; row < startRow + sqrt; row++) {
        for (let col = startCol; col < startCol + sqrt; col++) {
            if (board[row][col] == num) {
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
            colData += board[i][j] + " "
        }
        console.log(colData)
    }
}


main()