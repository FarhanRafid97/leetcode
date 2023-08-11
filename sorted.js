const sort = (nums) => {
  let newArr = [];
  let i = 0;
  let sorted = false;

  do {
    if (newArr.length === nums.length - 2) {
      i = 0;
      newArr = [];
      continue;
    }
    const n1 = nums[i];
    const n2 = nums[i + 1];
    if (n1 > n2) {
      nums[i] = n2;
      nums[i + 1] = n1;
      sorted = false;
      continue;
    } else {
      console.log(`${n1} > ${n2}`);

      newArr.push('a');
    }
    i += 2;
  } while (newArr.length !== nums.length - 2);
  console.log(nums);
};

sort([2, 1, 4, 2, 3, 1, 2, 3]);
