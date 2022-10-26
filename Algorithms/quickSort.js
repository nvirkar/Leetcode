/**
 * Quick Sort
 */

/**
 * Time complexity
 * Best case O(N(log(N)))
 * Worst Case O(N^2)
 */

main = function () {
    let arr = [8, 3, 4, 12, 5, 6]
    console.log("unsorted", arr)
    quickSort(arr, 0, arr.length - 1)
    console.log("sorted  ", arr)
}


quickSort = function (num, low, high) {
    if (low >= high) {
        return
    }

    let start = low
    let end = high
    let mid = start + Math.floor((end - start) / 2)
    let pivot = num[mid]

    while (start <= end) {
        while (num[start] < pivot) {
            start++
        }
        while (num[end] > pivot) {
            end--
        }

        if (start <= end) {
            let temp = num[start]
            num[start] = num[end]
            num[end] = temp
            start++
            end--
        }
    }

    quickSort(num, low, end)
    quickSort(num, start, high)
}

main()

