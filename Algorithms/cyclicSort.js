/**
 * Cyclic Sort
 * Used when given no.s in range from 1 to N
 */

/**
 * Time complexity 
 * Worst case O(n)
 */

main = function () {
    arr = [3, 5, 2, 1, 4]
    // arr = [5, 4, 3, 2, 1]
    console.log("unsorted", arr)
    cyclicSort(arr)
    console.log("sorted  ", arr)

}

swap = function (first, second) {
    temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}
cyclicSort = function (arr) {
    i = 0;
    while (i < arr.length) {
        correct = arr[i] - 1;
        if (arr[correct] != arr[i]) {
            swap(correct, i)
        } else {
            i++
        }
    }
}

main()