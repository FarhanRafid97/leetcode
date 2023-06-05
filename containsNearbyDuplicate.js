var containsNearbyDuplicate = function (nums, k) {
  if (k === 0) {
    return false;
  }

  const numSet = new Set();
  console.log(numSet);

  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      numSet.delete(nums[i - k - 1]);
    }

    if (numSet.has(nums[i])) {
      return true;
    }

    numSet.add(nums[i]);
  }

  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
