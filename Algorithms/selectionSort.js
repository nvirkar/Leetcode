/**
 * Selection Sort
 */

/**
 * Time complexity
 * Best => O(n^2)
 * Worst => O(n^2)
 */

main = function () {
    arr = [4, 5, 1, 2, 3]
    // arr = [5, 4, 3, 2, 1]
    // arr = [1]
    // arr = []

    console.log("unsorted", arr)
    selectionSort(arr)
    console.log("sorted  ", arr)
}


maxSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        last = arr.length - 1 - i
        maxIndex = getMaxIndex(arr, 0, last)
        swap(last, maxIndex)
    }
}

getMaxIndex = function (arr, start, end) {
    max = start
    for (let j = start; j <= end; j++) {
        if (arr[j] > arr[max]) {
            max = j
        }
    }
    return max
}

getMinIndex = function (arr, start, end) {
    min = start
    for (j = start; j <= end; j++) {
        if (arr[j] < arr[min]) {
            min = j
        }
    }
    return min
}

minSort = function (arr) {
    for (i = 0; i < arr.length; i++) {
        first = i
        min = getMinIndex(arr, i, arr.length - 1)
        swap(first, min)
    }
}

swap = function (first, last) {
    temp = arr[first]
    arr[first] = arr[last]
    arr[last] = temp
}

selectionSort = function (arr) {
    // sorts by finding max first
    maxSort(arr)

    // sorts by finding min first
    // minSort(arr)
}

main()