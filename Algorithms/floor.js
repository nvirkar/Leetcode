main = () => {
  // sorted in ascending
  nums1 = [2, 3, 5, 9, 14, 16, 18];

  console.log(floor(nums1, 14));
  console.log(floor(nums1, 15));
  console.log(floor(nums1, 4));
  console.log(floor(nums1, 9));
  console.log(floor(nums1, 18));
  console.log(floor(nums1, 27));
  console.log(floor(nums1, 1));
};

floor = (nums, target) => {
  low = 0;
  high = nums.length - 1;
  if (target < nums[low]) {
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
  return high;
};

main();
