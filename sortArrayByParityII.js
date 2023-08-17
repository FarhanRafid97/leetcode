var sortArrayByParityII = function (nums) {
  const odd = [];
  const even = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }
  const combine = [];
  const maxLength = odd.length > even.length ? odd.length : even.length;
  for (let z = 0; z < maxLength; z++) {
    combine.push(even[z]);
    combine.push(odd[z]);
  }
  console.log(combine);
};
sortArrayByParityII([4, 2, 5, 7]);
