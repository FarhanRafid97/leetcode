var binarySearch = function (nums, target) {
  const funcBinary = (left, right) => {
    let mid = Math.floor((left + right) / 2);

    if (left > right) {
      return -1;
    }
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      return funcBinary(left, mid - 1);
    }
    if (nums[mid] < target) {
      return funcBinary(mid + 1, right);
    }
  };

  return funcBinary(0, nums.length - 1);
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1));
