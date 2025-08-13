main = () => {
  // sorted in ascending
  nums1 = [1, 3, 5, 8, 10, 13, 15, 19, 25];

  // sorted in descending
  nums2 = [25, 19, 15, 13, 10, 8, 5, 3, 1];

  console.log(orderAgnosticBinarySearch(nums1, 8));
  console.log(orderAgnosticBinarySearch(nums1, 155));

  console.log(orderAgnosticBinarySearch(nums2, 5));
  console.log(orderAgnosticBinarySearch(nums2, 155));
};

orderAgnosticBinarySearch = (nums, target) => {
  low = 0;
  high = nums.length - 1;
  isAsc = nums[high] >= nums[low];
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      if (isAsc) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (isAsc) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
};

main();
