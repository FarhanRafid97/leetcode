var containsDuplicate = function (nums) {
  const tracking = [];
  for (let i = 0; i < nums.length; i++) {
    const findIndex = tracking.findIndex((t) => t.num === nums[i]);

    if (findIndex >= 0) {
      tracking[findIndex].isDuplicate = true;
    } else {
      tracking.push({ num: nums[i], isDuplicate: false });
    }
  }
  return tracking.filter((d) => d.isDuplicate).length > 0;
};

console.log(containsDuplicate([1, 2]));
