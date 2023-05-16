var findDisappearedNumbers = function (nums) {
  const uniqueNumb = [...new Set(nums)];

  const missingNUmb = [];
  for (let i = 1; i <= nums.length; i++) {
    uniqueNumb.has(i) ? null : missingNUmb.push(i);
  }

  return missingNUmb;
};
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
