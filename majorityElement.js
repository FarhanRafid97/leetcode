var majorityElement = function (nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    const findIndexOutput = output.findIndex((d) => d.num === nums[i]);

    if (findIndexOutput < 0) {
      output.push({ num: nums[i], count: 1 });
    } else {
      output[findIndexOutput] = { num: nums[i], count: output[findIndexOutput].count + 1 };
    }
  }
  return output.sort((a, b) => a.count - b.count).reverse()[0].num;
};
majorityElement([2, 2, 1, 1, 1, 2, 2]);
