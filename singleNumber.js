var singleNumber = function (nums) {
  const tracking = [];
  for (let i = 0; i < nums.length; i++) {
    const findIndex = tracking.findIndex((t) => t.num === nums[i]);

    if (findIndex >= 0) {
      tracking[findIndex].isDuplicate = true;
      console.log(findIndex);
    } else {
      tracking.push({ num: nums[i], isDuplicate: false });
    }
  }
  return tracking.filter((d) => !d.isDuplicate)[0].num;
};

singleNumber([2, 2, 2, 5]);
