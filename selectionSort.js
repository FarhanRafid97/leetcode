const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < nums.length; j++) {
      console.log(`num 1 =${nums[i]} num j = ${nums[j]}`);
      if (nums[smallest] > nums[j]) {
        smallest = j;
      }
      console.log(j, nums.length - 1);
      if (j === nums.length - 1) {
        const smallestNum = nums[i];
        console.log(smallest);
        nums[i] = nums[smallest];
        nums[smallest] = smallestNum;
      }
    }
  }
  console.log(nums);
};

sort([2, 1, 4, 7, 4, 2, 4, 1, 4, 14, 212, 3, 1, 2, 3]);
