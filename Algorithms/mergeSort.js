/**
 * Merge Sort
 */

/**
 * Time Complexity: O(N(logN))
 * Space Complexity: O(N)
 */

main = function () {
  let arr = [8, 3, 4, 12, 5, 6];
  console.log("unsorted", arr);
  let res = mergeSort(arr);
  console.log("sorted  ", res);

  //   console.log("unsorted", arr);
  //   mergeSortInPlace(arr, 0, arr.length); // in place logic
  //   console.log("sorted  ", arr);
};

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
    mix[k] = first[i];
    i++;
    k++;
  }

  while (j < second.length) {
    mix[k] = second[j];
    j++;
    k++;
  }

  return mix;
};

mergeSort = function (num) {
  if (num.length == 1) {
    return num;
  }

  let mid = Math.floor(num.length / 2);

  let left = mergeSort(num.slice(0, mid));
  let right = mergeSort(num.slice(mid, num.length));

  return merge(left, right);
};

mergeInPlace = function (arr, start, mid, end) {
  let mix = [];
  let i = start;
  let j = mid;
  let k = 0;

  while (i < mid && j < end) {
    if (arr[i] < arr[j]) {
      mix[k] = arr[i];
      i++;
      k++;
    } else {
      mix[k] = arr[j];
      j++;
      k++;
    }
  }

  while (i < mid) {
    mix[k] = arr[i];
    i++;
    k++;
  }

  while (j < end) {
    mix[k] = arr[j];
    j++;
    k++;
  }

  for (let l = 0; l < mix.length; l++) {
    arr[start + l] = mix[l];
  }
};

mergeSortInPlace = function (num, start, end) {
  if (end - start == 1) {
    return;
  }

  let mid = Math.floor((start + end) / 2);

  mergeSortInPlace(num, start, mid);
  mergeSortInPlace(num, mid, end);

  mergeInPlace(num, start, mid, end);
};

main();
