/**
 * Bubble Sort
 * Sinking Sort
 * Exchange Sort
 */

/**
 * space complexity O(1)
 * No extra space is needed as n increases
 * Its an inplace sorting algorithm
 *
 * Time complexity
 * Best case O(n) => its already sorted
 * Worst case O(n^2) => sorted in descing order
 */

main = function () {
  arr = [3, 1, 5, 4, 2];
  // arr = [1, 2, 3, 4, 5]
  // arr = [1, 2, 4, 3, 5]

  console.log("unsorted", arr);
  bubbleSort(arr, arr.length - 1, 0);
  console.log("sorted  ", arr);
};

bubbleSort = function (arr, row, col) {
  if (row == 0) {
    return;
  }

  if (col < row) {
    if (arr[col] > arr[col + 1]) {
      temp = arr[col];
      arr[col] = arr[col + 1];
      arr[col + 1] = temp;
    }
    bubbleSort(arr, row, col + 1);
  } else {
    bubbleSort(arr, row - 1, 0);
  }
};

main();
