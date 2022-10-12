/**
 * Bubble Sort 
 * Sinking Sort
 * Exchange Sort
 */

main = function () {
    arr = [3, 1, 5, 4, 2]
    console.log("unsorted", arr)
    bubbleSort(arr)
    console.log("sorted", arr)
}

bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}


main()