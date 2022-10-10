
var rotationCount = function (nums) {
    end = nums.length - 1
    pivot = findPivotWithDuplicates(nums)
    return pivot + 1
};


var findPivot = function (nums) {
    low = 0;
    high = nums.length - 1;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)

        if (mid < high && nums[mid] > nums[mid + 1]) {
            return mid
        }
        if (mid > low && nums[mid] < nums[mid - 1]) {
            return mid - 1
        }

        if (nums[mid] <= nums[low]) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return -1
}

var findPivotWithDuplicates = function (nums) {
    low = 0;
    high = nums.length - 1;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2)

        if (mid < high && nums[mid] > nums[mid + 1]) {
            return mid
        }
        if (mid > low && nums[mid] < nums[mid - 1]) {
            return mid - 1
        }

        if (nums[low] == nums[mid] && nums[end] == nums[mid]) {
            if (nums[low] > nums[low + 1]) {
                return low
            }
            low++
            if (nums[high] < nums[high - 1]) {
                return high - 1
            }
            high--
        }

        else if (nums[low] < nums[mid] || ((nums[low] == nums[mid]) && nums[mid] > nums[end])) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return -1
}


console.log(rotationCount([4, 5, 6, 7, 0, 1, 2]))
console.log(rotationCount([4, 5, 5, 6, 7, 7, 0, 1, 2]))
console.log(rotationCount([1]))
console.log(rotationCount([1, 3]))
console.log(rotationCount([3, 1]))
console.log(rotationCount([5, 1, 3]))
console.log(rotationCount([3, 5, 1]))