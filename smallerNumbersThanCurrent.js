var smallerNumbersThanCurrent = function (nums) {
  const output = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        output[i] = output[i] + 1;
      }
    }
  }
  return output;
};
smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
