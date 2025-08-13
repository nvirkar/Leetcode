main = () => {
  // sorted in ascending
  nums1 = [2, 3, 5, 9, 14, 16, 18];

  console.log(ceil(nums1, 14));
  console.log(ceil(nums1, 15));
  console.log(ceil(nums1, 4));
  console.log(ceil(nums1, 9));
  console.log(ceil(nums1, 18));
  console.log(ceil(nums1, 27));
};

ceil = (nums, target) => {
  low = 0;
  high = nums.length - 1;
  if (target > nums[high]) {
    return -1;
  }
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

main();
