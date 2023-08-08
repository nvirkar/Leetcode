/**
 * Insertion Sort
 */

/**
 * Time complexity
 * Best case O(n)
 * Worst case O(n^2)
 * Stable
 * Used when array is partially sorted
 * Used in hybrid sorted algorithms
 */


main = function () {
    arr = [4, 5, 1, 2, 3]
    // arr = [5, 4, 3, 2, 1]
    // arr = [1]
    // arr = []

    console.log("unsorted", arr)
    insertionSort(arr)
    console.log("sorted  ", arr)
}

insertionSort = function (arr) {
    n = arr.length;
    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
            } else {
                break;
            }
        }
    }
}



main()