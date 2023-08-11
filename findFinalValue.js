var findFinalValue = function (nums, original) {
  let output = original;
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    if (nums[i] === output) {
      output = output * 2;
      console.log(nums[i]);
      i = -1;
    }
  }

  return output;
};

findFinalValue([8, 19, 4, 2, 15, 3], 2);
