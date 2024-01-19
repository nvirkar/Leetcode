/**
 * Leetcode-33
 * Search in a Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * #BinarySearch
 */

var search = function (nums, target) {
  end = nums.length - 1;
  pivot = findPivot(nums);
  // if pivot is not found means array is not rotated
  if (pivot == -1) {
    return binarySearch(nums, target, 0, end);
  }
  // if pivot is target
  if (nums[pivot] == target) {
    return pivot;
  }
  if (target >= nums[0]) {
    return binarySearch(nums, target, 0, pivot - 1);
  } else {
    return binarySearch(nums, target, pivot + 1, end);
  }
};

var findPivot = function (nums) {
  low = 0;
  high = nums.length - 1;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if ((mid < high) && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if ((mid > low) && nums[mid - 1] > nums[mid]) {
      return mid - 1;
    }

    if (nums[low] <= nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

var binarySearch = function (nums, target, low, high) {
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([1], 1));
console.log(search([1, 3], 1));
console.log(search([3, 1], 1));
console.log(search([5, 1, 3], 3));
console.log(search([3, 5, 1], 3));
