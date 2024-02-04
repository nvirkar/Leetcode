/**
 * Leetcode-1572
 * Matrix Diagonal Sum
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * Array
 */

var diagonalSum = function(matrix) {
  sum = 0
  for(let row = 0;row< matrix.length;row++){
    for(let col =0; col < matrix[0].length;col++){
      if((matrix.length -1) == (row + col) || row == col){
        sum = sum + matrix[row][col]
      }
    }
  }  
  return sum
};


console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);


console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);

console.log(diagonalSum([[5]]));
