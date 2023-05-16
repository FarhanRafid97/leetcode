var removeElement = function (nums, val) {
  let k = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      k.push(nums[i]);
    }
  }

  return k;
};
console.log(removeElement([3, 2, 2, 3], (val = 3)));
