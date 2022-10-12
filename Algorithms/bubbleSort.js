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
    arr = [3, 1, 5, 4, 2]
    // arr = [1, 2, 3, 4, 5]
    console.log("unsorted", arr)
    bubbleSort(arr)
    console.log("sorted  ", arr)
}

bubbleSort = function (arr) {
    swapped = false;
    // i goes from 0 to n-1
    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        // j goes from 1 to n-i
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
                swapped = true
            }
        }
        if (swapped == false) {
            break
        }
    }
}

main()

