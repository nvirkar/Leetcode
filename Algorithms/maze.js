
// count no of ways to move from (row,col) to (1,1)
// can move R & D
var count = function (row, col) {
    if (row == 1 || col == 1) {
        return 1
    }
    let left = count(row - 1, col)
    let right = count(row, col - 1)
    return left + right
}

// print path to move from (row,col) to (1,1)
// can move R & D
var path = function (p, row, col) {
    if (row == 1 && col == 1) {
        console.log(p)
    }
    if (row > 1) {
        path(p + "D", row - 1, col)
    }
    if (col > 1) {
        path(p + "R", row, col - 1)
    }
}

// return paths to move from (row,col) to (1,1)
// can move R & D
var pathArr = function (p, row, col) {
    if (row == 1 && col == 1) {
        let res = []
        res.push(p)
        return res
    }
    let res = []
    if (row > 1) {
        res.push(...pathArr(p + "D", row - 1, col))
    }
    if (col > 1) {
        res.push(...pathArr(p + "R", row, col - 1))
    }
    return res;
}

// return paths to move from (row,col) to (1,1)
// can move R , D & Diagonal
var pathArrDiagonal = function (p, row, col) {
    if (row == 1 && col == 1) {
        let res = []
        res.push(p)
        return res
    }
    let res = []
    if (row > 1 && col > 1) {
        res.push(...pathArrDiagonal(p + "Di ", row - 1, col - 1))
    }
    if (row > 1) {
        res.push(...pathArrDiagonal(p + "D ", row - 1, col))
    }
    if (col > 1) {
        res.push(...pathArrDiagonal(p + "R ", row, col - 1))
    }
    return res;
}

// console.log(count(3, 3))
// console.log(count(4, 4))


// path("", 3, 3)
// path("", 4, 4)

// console.log(pathArr("", 3, 3))
// console.log(pathArr("", 4, 4))

console.log(pathArrDiagonal("", 3, 3))
// console.log(pathArrDiagonal("", 4, 4))


