/**
 * Merge Sort
 */

/**
 * Time Complexity: O(N(logN))
 * Space Complexity: O(N)
 */

main = function () {
    let arr = [8, 3, 4, 12, 5, 6]
    console.log("unsorted", arr)
    let res = mergeSort(arr)
    console.log("sorted  ", res)
}

merge = function (first, second) {
    let mix = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            mix[k] = first[i];
            i++;
            k++;
        } else {
            mix[k] = second[j];
            j++;
            k++;
        }
    }

    while (i < first.length) {
        mix[k] = first[i]
        i++;
        k++;
    }

    while (j < second.length) {
        mix[k] = second[j]
        j++;
        k++;
    }

    return mix
}

mergeSort = function (num) {
    if (num.length <= 1) {
        return num;
    }

    let mid = Math.floor(num.length / 2);

    let left = mergeSort([...num].slice(0, mid))
    let right = mergeSort([...num].slice(mid, num.length))

    return merge(left, right)
}

main()

