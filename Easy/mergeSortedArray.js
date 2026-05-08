/**
 * Leetcode-88
 * Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 * #Array
 */

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5);
