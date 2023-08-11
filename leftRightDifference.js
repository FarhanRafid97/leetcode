var leftRightDifference = function (nums) {
  const sum = [[], []];
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sum[0].push(0);
      sum[1][nums.length - 1 - i] = 0;
    } else {
      sum[0].push(nums[i - 1] + sum[0][i - 1]);
      sum[1][nums.length - 1 - i] = nums[nums.length - i] + sum[1][nums.length - i];
    }
    console.log(i, 'index', sum);
  }
  for (let i = 0; i < nums.length; i++) {
    output.push(sum[0][i] > sum[1][i] ? sum[0][i] - sum[1][i] : sum[1][i] - sum[0][i]);
  }
  return output
};

console.log(leftRightDifference([10, 4, 8, 3]));
