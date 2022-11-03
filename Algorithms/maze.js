var main = function () {
    // fnCount()
    // fnPath()
    // fnPathArr()
    // fnPathArrDiagonal()

    // fnPathWithObstacles()

    fnPathWithSteps()
}

var fnCount = function () {
    console.log(count(3, 3))
    console.log(count(4, 4))
}

var fnPath = function () {
    path("", 3, 3)
    path("", 4, 4)
}


var fnPathArr = function () {
    console.log(pathArr("", 3, 3))
    console.log(pathArr("", 4, 4))
}
var fnPathArrDiagonal = function () {
    console.log(pathArrDiagonal("", 3, 3))
    console.log(pathArrDiagonal("", 4, 4))
}

var fnPathWithObstacles = function () {
    maze = [[1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]]
    pathwithObstacles("", maze, 0, 0)
}

var fnPathWithSteps = function () {
    let maze = [[1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]]

    let paths = JSON.parse(JSON.stringify(maze).replace(/1/g, '0'))

    pathWithSteps("", maze, 0, 0, paths, 1)
}


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


var pathwithObstacles = function (p, maze, row, col) {
    if (row == maze.length - 1 && col == maze[0].length - 1) {
        console.log(p)
        return
    }
    if (!maze[row][col]) {
        return
    }
    if (row < maze.length - 1) {
        pathwithObstacles(p + "D", maze, row + 1, col)
    }
    if (col < maze.length - 1) {
        pathwithObstacles(p + "R", maze, row, col + 1)
    }
}

var pathWithSteps = function (p, maze, row, col, path, stepCount) {
    if (row == maze.length - 1 && col == maze[0].length - 1) {
        path[row][col] = stepCount
        for (const iterator of path) {
            console.log(iterator.toString());
        }
        console.log(p)
        console.log();
        return
    }
    if (!maze[row][col]) {
        return
    }
    maze[row][col] = 0
    path[row][col] = stepCount


    if (row < maze.length - 1) {
        pathWithSteps(p + "D", maze, row + 1, col, path, stepCount + 1)
    }
    if (col < maze.length - 1) {
        pathWithSteps(p + "R", maze, row, col + 1, path, stepCount + 1)
    }
    if (row > 0) {
        pathWithSteps(p + "U", maze, row - 1, col, path, stepCount + 1)

    }
    if (col > 0) {
        pathWithSteps(p + "L", maze, row, col - 1, path, stepCount + 1)
    }

    maze[row][col] = 1
    path[row][col] = 0

}

main()