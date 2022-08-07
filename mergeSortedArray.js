/**
 * Leetcode-88
 * Merge Sorted Array
 */

var merge = function (nums1, m, nums2, n) {
    i = 0, j = 0;
    while (i < m + n && j < n) {
        if (nums1[i] > nums2[j]) {
            for (k = m + n - 1; k > i; k--) {
                nums1[k] = nums1[k - 1]
            }
            nums1[i] = nums2[j]
            j++
        }
        i++
    }
    for (k = n - 1, z = m + n - 1; k >= j; k--, z--) {
        nums1[z] = nums2[k]
    }
    console.log(nums1)
};


merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([1], 1, [], 0)
merge([0], 0, [1], 1)
merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5)

