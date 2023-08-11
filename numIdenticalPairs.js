var numIdenticalPairs = function (nums) {
  let output = 0;
  nums.forEach((d, idx) => {
    for (let i = idx + 1; i < nums.length; i++) {
      output = d === nums[i] ? output + 1 : output;
    }
  });

  return output;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
