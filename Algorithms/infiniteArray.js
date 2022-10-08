
main = () => {
    nums1 = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170];

    console.log(ans(nums1, 10))
}


ans = function (nums, target) {
    // start with box of size 2 
    low = 0
    high = 1

    // condition for infinite Array
    while (target > nums[high]) {
        newlow = high + 1;
        high = high + (high - low + 1) * 2
        low = newlow
    }

    return infiniteArray(nums, target, low, high)

}

infiniteArray = (nums, target, low, high) => {
    if (target > nums[high]) {
        return -1
    }
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}

main()