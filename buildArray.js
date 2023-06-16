var buildArray = function (nums) {
  const output = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    output[nums[i]] = nums[i];
  }
  console.log(output);
  return output;
};

buildArray([0, 2, 1, 5, 3, 4]);
