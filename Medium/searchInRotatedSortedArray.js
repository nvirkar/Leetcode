/**
 * Leetcode-81
 * Search in a Rotated Sorted Array II
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * #BinarySearch
 */

var search = function (nums, target) {
  end = nums.length - 1;
  pivot = findPivotWithDuplicates(nums);

  // if pivot is not found means array is not rotated
  if (pivot == -1) {
    return binarySearch(nums, target, 0, end);
  }
  // if pivot is target
  if (nums[pivot] == target) {
    return true;
  }
  if (target >= nums[0]) {
    return binarySearch(nums, target, 0, pivot - 1);
  } else {
    return binarySearch(nums, target, pivot + 1, end);
  }
};

var findPivotWithDuplicates = function (nums) {
  low = 0;
  high = nums.length - 1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (mid < high && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if (mid > low && nums[mid] < nums[mid - 1]) {
      return mid - 1;
    }

    if (nums[low] == nums[mid] && nums[high] == nums[mid]) {
      if (nums[low] > nums[low + 1]) {
        return low;
      }
      low++;
      if (nums[high] < nums[high - 1]) {
        return high - 1;
      }
      high--;
    } else if (
      nums[low] < nums[mid] ||
      (nums[low] == nums[mid] && nums[mid] > nums[high])
    ) {
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
      return true;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([1, 0, 1, 1, 1], 0));
console.log(search([2, 2, 2, 3, 1], 1));
console.log(
  search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)
);
