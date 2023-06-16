var createTargetArray = function (nums, index) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (output[index[i]] !== undefined) {
      output.splice(index[i], 0, nums[i]);
    } else {
      output[index[i]] = nums[i];
    }
  }
  return output;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
