/**
 * Selection Sort
 */

/**
 * Time complexity
 * Best => O(n^2)
 * Worst => O(n^2)
 */

main = function () {
  arr = [4, 5, 1, 2, 3];
  // arr = [5, 4, 3, 2, 1]
  // arr = [1]
  // arr = []

  console.log("unsorted", arr);
  selectionSort(arr, arr.length, 0, 0);
  console.log("sorted  ", arr);
};

selectionSort = function (arr, row, col, max) {
  if (row == 0) {
    return;
  }

  if (col < row) {
    if (arr[col] > arr[max]) {
      selectionSort(arr, row, col + 1, col);
    } else {
      selectionSort(arr, row, col + 1, max);
    }
  } else {
    temp = arr[max];
    arr[max] = arr[row - 1];
    arr[row - 1] = temp;

    selectionSort(arr, row - 1, 0, 0);
  }
};

main();
