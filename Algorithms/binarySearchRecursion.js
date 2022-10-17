
main = () => {
    // sorted in ascending
    nums1 = [1, 3, 5, 8, 10, 13, 15, 19, 25];

    // sorted in descending
    nums2 = [25, 19, 15, 13, 10, 8, 5, 3, 1];

    console.log(search(nums1, 8, 0, nums1.length - 1))
    console.log(search(nums1, 155, 0, nums1.length - 1))

    console.log(search(nums2, 5, 0, nums1.length - 1))
    console.log(search(nums2, 155, 0, nums1.length - 1))
}


search = (nums, target, start, end) => {
    if (start > end) {
        return -1
    }
    mid = start + Math.floor((end - start) / 2);
    isAsc = nums[start] < nums[end]
    if (nums[mid] == target) {
        return mid
    } else if (target < nums[mid]) {
        if (isAsc) {
            return search(nums, target, start, mid - 1)
        } else {
            return search(nums, target, mid + 1, end)
        }
    } else {
        if (isAsc) {
            return search(nums, target, mid + 1, end)
        } else {
            return search(nums, target, start, mid - 1)
        }
    }
}

main()